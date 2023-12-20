import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HotSell = () => {
    return (
        <div className='text-center '>
            <Tabs >
                <TabList>
                    <Tab>HOT SALE</Tab>
                    <Tab>EXERCISE & FITNESS</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default HotSell;