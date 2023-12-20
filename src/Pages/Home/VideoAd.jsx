
import video from '../../assets/Adaptable to every body. Philips All-in-one trimmer (1080p).mp4'
const VideoAd = () => {
    return (
        <div className='w-[90%] mx-auto' >
            <video className='h-screen w-full'  src={video} autoPlay loop muted></video>
        </div>
    );
};

export default VideoAd;