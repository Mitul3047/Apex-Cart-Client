import Banner from "./Banner";
import BestForYou from "./BestForYou";
import BestProductes from "./BestProductes";
import HotSell from "./HotSell/HotSell";
import Support from "./Support";
import VideoAd from "./VideoAd";
import Videos from "./videos";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HotSell></HotSell>
           <BestProductes></BestProductes>
           <VideoAd></VideoAd>
           <BestForYou></BestForYou>
           <Videos></Videos>
           <Support></Support>
        </div>
    );
};

export default Home;