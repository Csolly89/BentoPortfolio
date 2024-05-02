import frameworks from "../Utilities/frameworks"

const Frameworks = () => {
    return (
        <>
            <ul className='flex flex-row justify-center mt-5'>
                {frameworks.map((item, i) => (
                    <div key={i} className=''>
                        <img className='h-28 w-28 p-5' src={item.pic} alt={item.alt} />
                    </div>
                ))
                }
            </ul>
        </>
    );
}
export default Frameworks;