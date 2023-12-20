

const Videos = () => {
    return (
        <div className='w-[90%] mx-auto h-screen flex justify-center items-center'>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3  ">
                <div className='space-y-4'>
                    <iframe className='w-full h-[300px]' src="https://www.youtube.com/embed/TNkZor8i0HA?si=G7DGyK0c30V1AORu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h1 className='text-2xl'>30 Minutes Daily Fun Workout</h1>
                    <p className='text-justify'>The smart hula hoop counts your burned calories, tracks how long you work out, and records other vital information.</p>
                </div>
                <div className='space-y-4'>
                    <iframe className='w-full h-[300px]' src="https://www.youtube.com/embed/JLI2WF-5eVw?si=zxfuuINhuwh-9gg0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h1 className='text-2xl'>30 Minutes Daily Fun Workout</h1>
                    <p className='text-justify'>The smart hula hoop counts your burned calories, tracks how long you work out, and records other vital information.</p>
                </div>
                <div className='space-y-4'>
                    <iframe className='w-full h-[300px]' src="https://www.youtube.com/embed/_apdv6uz3dk?si=jlpnKeJDNro0F01x" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h1 className='text-2xl'>30 Minutes Daily Fun Workout</h1>
                    <p className='text-justify'>The smart hula hoop counts your burned calories, tracks how long you work out, and records other vital information.</p>
                </div>
            </div>
        </div>
    );
};

export default Videos;