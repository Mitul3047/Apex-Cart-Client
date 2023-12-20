import Banner from "./Banner";
import BestForYou from "./BestForYou";
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
           <BestForYou></BestForYou>
        </div>
    );
};

export default Home;