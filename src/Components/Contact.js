import React, { useRef } from 'react';
import Navbar from "./Navbar";
import emailjs from '@emailjs/browser';
import green from "../assets/greenGradient.png"


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_ID}`,
                `${process.env.REACT_APP_TEMPLATE_ID}`,
                form.current, {
                publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className="sticky top-0 z-10 overflow-hidden "> <Navbar /> </div>
            <img className="w-full h-[100vh] top-0 fixed z-[-10]  object-fill" src={green} alt="gradient background" />
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
}
export default Contact;