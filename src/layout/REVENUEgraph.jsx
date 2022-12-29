import { Line, RingProgress } from "@ant-design/charts";
import { Button, Card, Radio, Space } from "antd";
import React, { useEffect, useState } from "react";
import '../styles/layout/REVENUEgraph.css';
import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;


const REVENUEgraph = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
    };

    const onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
    };

    const progress_config = {
        label: 'lebal',
        height: 100,
        width: 100,
        autoFit: false,
        percent: 0.7,
        color: ['#5B8FF9', '#E8EDF3'],
    };

    // index
    const [people_data, setpeople_Data] = useState([]);
    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setpeople_Data(people_data.concat(body.results));
                message.success(`${body.results.length} more items loaded!`);
            });
    };
    useEffect(() => {
        appendData();
    }, []);
    // const onScroll = (e) => {
    //     if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
    //         appendData();
    //     }

    return (
        <div className="REVENUE_graph">
            <div className="site-card-border-less-wrapper">
                <Card
                    title="REVENUE"
                    bordered={false}
                    style={{
                        width: 1100,
                    }}

                >
                    <p className="Revenue_discp">Revenue is the income that a business has from its normal business activities, usually from the sale <br /> of goods and services to customers.</p>
                    <div className="groupBtn">
                        <Radio.Group
                            onChange={onChange}
                            defaultValue="a"
                            style={{
                                marginTop: 16,
                            }}
                        >
                            <Radio.Group onChange={onChange} defaultValue="c">
                                <Radio.Button value="a">Today</Radio.Button>
                                <Radio.Button value="b">Week</Radio.Button>
                                <Radio.Button type="primary" value="c">Month</Radio.Button>
                                <Radio.Button value="d">Year</Radio.Button>
                            </Radio.Group>
                        </Radio.Group>
                    </div>
                    <Line {...config} />
                </Card>
            </div>
            <div className="MONTHLY_STORAGE_graphs">
                <div className="MONTHLY_SALES_graph graph_">
                    {/* <div className="site-card-border-less-wrapper"> */}
                    <Card
                        title="MONTHLY SALES"
                        bordered={false}
                        style={{
                            width: 700,
                            height: 600,
                        }}
                    >
                        <p className="Revenue_discp">Sales are activities related to selling or the number of goods or services sold in a given time period.</p>
                        <Line {...config} />;
                    </Card>
                    {/* </div> */}
                </div>
                <div className="CLOUD_STORAGE_graph graphs_1">
                    {/* <div className="site-card-border-less-wrapper"> */}
                    <Card
                        // width="120"
                        height="100%"
                        // title="CLOUD STORAGE                        "
                        bordered={false}
                        style={{
                            width: 300,
                            height: 600,

                        }}
                    >
                        <div className="title_doted">
                            <h4 className="INBOX">CLOUD STORAGE</h4>
                            <div className="doted">
                                <BiDotsHorizontalRounded />
                            </div>
                        </div>

                        <RingProgress className="RingProgress" {...progress_config} />
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                                paddingTop: '20px',
                            }}
                        >   <label className="Total">Total storage </label>
                            <span class="p-1 ms-1 rounded-circle bg-secondary"></span>
                            <label className="Uesd">Used storage </label>
                            <span class="p-1 me-1 rounded-circle bg-primary"></span>
                            <Button type="primary" block>
                                Upgrade Storage
                            </Button>
                        </Space>

                    </Card>
                    {/* </div> */}
                </div>

            </div>
            <div className="inbox_projects">
                <Card
                    style={{ width: '40%', }}
                >   <div className="title_doted">
                        <h4 className="INBOX">INBOX</h4>
                        <div className="doted">
                            <BiDotsHorizontalRounded />
                        </div>
                    </div>
                    {/* <BiDotsHorizontalRounded /> */}
                    <List>
                        <VirtualList
                            data={people_data}
                            height={ContainerHeight}
                            itemHeight={17}
                            itemKey="email"
                        // onScroll={onScroll}
                        >
                            {(item) => (
                                <List.Item key={item.email}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={item.name.last}
                                        description={item.email}
                                    />
                                    <div>Content</div>
                                </List.Item>
                            )}
                        </VirtualList>
                    </List>
                </Card>
            </div>
        </div>
    );
};

export default REVENUEgraph;
