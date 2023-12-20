import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProductes from '../../hooks/useProductes';




// import required modules

const BestForYou = () => {
    const [producets] = useProductes();
    console.log(producets);
    const healthBeauty = producets.filter(item => item.category === 'health_beauty');
    console.log(healthBeauty);
    const yogaProducts = producets.filter(item => item.category === 'yoga_products');
    const absTrainer = producets.filter(item => item.category === 'ans_trainer');
    const personalCare = producets.filter(item => item.category === 'personal_care');
    const dumbbellsBarbells = producets.filter(item => item.category === 'dumbbells_barbells');
    return (
        <div className='text-center '>
            <Tabs >
                <TabList>
                    <Tab>Health & Beauty</Tab>
                    <Tab>Yoga Products</Tab>
                    <Tab>Abs Trainer</Tab>
                    <Tab>Personal Care</Tab>
                    <Tab>Dumbbells & Barbells</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                        {
                            healthBeauty.map(item => (
                                <div key={item.id}>
                                    <div className="card card-compact max-w-xs bg-base-100 shadow-xl rounded-md">
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
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                        {
                            yogaProducts.map(item => (
                                <div key={item.id}>
                                    <div className="card card-compact max-w-xs bg-base-100 shadow-xl rounded-md">
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
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                        {
                           absTrainer.map(item => (
                                <div key={item.id}>
                                    <div className="card card-compact max-w-xs bg-base-100 shadow-xl rounded-md">
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
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                        {
                           personalCare.map(item => (
                                <div key={item.id}>
                                    <div className="card card-compact max-w-xs bg-base-100 shadow-xl rounded-md">
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
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                        {
                            dumbbellsBarbells.map(item => (
                                <div key={item.id}>
                                    <div className="card card-compact max-w-xs bg-base-100 shadow-xl rounded-md">
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
                            ))
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default BestForYou;