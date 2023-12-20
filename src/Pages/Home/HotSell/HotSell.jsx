import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProductes from '../../../hooks/useProductes';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../componenets/SectionTitle/SectionTitle';
const HotSell = () => {
    const [producets] = useProductes();
    console.log(producets);
    const hotSell = producets.filter(item => item.category === 'hotSell');
    console.log(hotSell);
    const exerciceFitness = producets.filter(item => item.category === 'gym');
    return (
        <div className='text-center w-[90%] mx-auto'>
            <SectionTitle heading={'Hot selling products'}></SectionTitle>
            <Tabs >
                <TabList>
                    <Tab>HOT SALE</Tab>
                    <Tab>EXERCISE & FITNESS</Tab>
                </TabList>

                <TabPanel>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            hotSell.map(item => (
                                <div key={item.id}>
                                    <SwiperSlide>
                                        <div>
                                            <div className="card card-compact max-w-xs bg-base-100 mt-8 shadow-xl rounded-md">
                                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{item.title}</h2>
                                                    <h3>{item.category}</h3>
                                                    <p>{item.description}</p>
                                                    <div className="">
                                                        <button className="btn btn-primary rounded-none w-full">Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }

                    </Swiper>
                </TabPanel>
                <TabPanel>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            exerciceFitness.map(item => (
                                <div key={item.id}>
                                    <SwiperSlide>
                                        <div>
                                            <div className="card card-compact max-w-xs bg-base-100 mt-8 shadow-xl rounded-md">
                                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{item.title}</h2>
                                                    <h3>{item.category}</h3>
                                                    <p>{item.description}</p>
                                                    <div className="">
                                                        <button className="btn btn-primary rounded-none w-full">Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }

                    </Swiper>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default HotSell;