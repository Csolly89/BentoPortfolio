import skills from "../Utilities/skills"

const Skills = () => {
    return (
        <>
            <ul className='flex flex-row justify-center mt-5'>
                {skills.map((item, i) => (
                    <div key={i} className=''>
                        <img className='h-36 w-36 p-5' src={item.pic} alt={item.alt} />
                    </div>
                ))
                }
            </ul>
        </>
    );
}
export default Skills;