import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img5 from '../../assets/home/05.png';
import img6 from '../../assets/home/06.png';
import SectionTitle from '../../componenets/SectionTitle/SectionTitle';
const BestProductes = () => {
    return (
     <div className=' w-[90%] mx-auto  h-screen'>
         <SectionTitle heading={'Our best product'}></SectionTitle>
           <div className='flex flex-col lg:flex-row gap-4 justify-center items-center'>
           
            <div className=' lg:w-1/2'>
                <Carousel className='text-center'>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                    <div>
                        <img src={img4} />
                    </div>
                    <div>
                        <img src={img5} />
                    </div>
                    <div>
                        <img src={img6} />
                    </div>
                </Carousel>
            </div>
            <div className='space-y-4'>
                <h2>MASKURA Smart Weighted Hula Hoop With Counter 27 knots - Weight Loss Hula Hoop, Smart Fitness, Adjustable Ring Size With Counter Suitable For Adult</h2>
                <p>
                    £10.99 GBP
                    Regular price£42.00 GBP
                    SAVE 74%
                    Tax included. Shipping calculated at checkout
                </p>
                <button className='w-full btn bg-red-600 text-white'>Add to Cart</button>
                <button className='w-full btn bg-violet-600 text-white'>Buy With ShopPay</button>
            </div>
        </div>
     </div>
    );
};

export default BestProductes;