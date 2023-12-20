import Banner from "./Banner";
import BestProductes from "./BestProductes";
import HotSell from "./HotSell/HotSell";
import VideoAd from "./VideoAd";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HotSell></HotSell>
           <BestProductes></BestProductes>
           <VideoAd></VideoAd>
        </div>
    );
};

export default Home;