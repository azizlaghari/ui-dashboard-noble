import React, { useState } from 'react';
import '../styles/layout/deshboard.css';

// react icons
import { FiBox, FiPieChart } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsChatLeft } from 'react-icons/bs';
import { AiOutlineCalendar, AiOutlineCloudDownload, AiOutlineInbox, AiOutlinePrinter } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbLeaf, TbTable } from 'react-icons/tb';
import { BiAnchor } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { SiIconify } from 'react-icons/si';

import { DownOutlined } from '@ant-design/icons';
import { Button, DatePicker, Dropdown, Space } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Navbar from './navbar';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import GraphCards from './graphCards';
import REVENUEgraph from './REVENUEgraph';

const { Header, Sider, Content } = Layout;
const Deshboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const dateFormatList = ['DD-MM-YYYY', 'DD-MM-YY'];
    dayjs.extend(customParseFormat);

    // UI_Kit_items dropdown
    const UI_Kit_items = [
        {
            label: '1st menu item',
            key: '0',
        },
        {
            label: '1st menu item',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    // Advanced_UI_items dropdown
    const Advanced_UI_items = [
        {
            label: '1st menu item',
            key: '0',
        },
        {
            label: '1st menu item',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    // Forms_items dropdown
    const Forms_items = [
        {
            label: '1st menu item',
            key: '0',
        },
        {
            label: '1st menu item',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    // Charts_items dropdown
    const Charts_items = [
        {
            label: '1st menu item',
            key: '0',
        },
        {
            label: '1st menu item',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    // Table_items dropdown
    const Table_items = [
        {
            label: '1st menu item',
            key: '0',
        },
        {
            label: '1st menu item',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    // Icons_items dropdown
    const Icons_items = [
        {
            label: '1st menu item',
            key: '0',
        },
        {
            label: '1st menu item',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {React.createElement(collapsed ? RxHamburgerMenu : RxCross2, {
                    label: 'Noble UI',
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
                <div className="logo" />
                <Menu
                    theme="dark"
                    className="sider"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            label: 'Noble UI',
                        },

                        {
                            key: '1',
                            icon: <FiBox />,
                            label: 'Deshboard',
                        },
                        {
                            key: '2',
                            icon: <HiOutlineMail />,
                            label: 'Email',
                        },
                        {
                            key: '3',
                            icon: <BsChatLeft />,
                            label: 'Chat',
                        },
                        {
                            key: '4',
                            icon: <AiOutlineCalendar />,
                            label: 'Calendar',
                        },
                        // COMPONENTS ********************************
                        {
                            key: '5',
                            // label: 'UI Kit' ,
                            icon: <Dropdown
                                menu={{
                                    UI_Kit_items,
                                }}
                                trigger={['click']}
                            >
                                <>
                                    <span onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <TbLeaf />
                                            UI Kit
                                            <DownOutlined />
                                        </Space>
                                    </span>
                                </>
                            </Dropdown>
                        },
                        {
                            key: '6',
                            // label: 'UI Kit' ,
                            icon: <Dropdown
                                menu={{
                                    Advanced_UI_items,
                                }}
                                trigger={['click']}
                            >
                                <>
                                    <span onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <BiAnchor />
                                            Ad UI
                                            <DownOutlined />
                                        </Space>
                                    </span>
                                </>
                            </Dropdown>,
                        },
                        {
                            key: '7',
                            // label: 'UI Kit' ,
                            icon: <Dropdown
                                menu={{
                                    Forms_items,
                                }}
                                trigger={['click']}
                            >
                                <>
                                    <span onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <AiOutlineInbox />
                                            Forms
                                            <DownOutlined />
                                        </Space>
                                    </span>
                                </>
                            </Dropdown>,
                        },
                        {
                            key: '8',
                            // label: 'UI Kit' ,
                            icon: <Dropdown
                                menu={{
                                    Charts_items,
                                }}
                                trigger={['click']}
                            >
                                <>
                                    <span onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <FiPieChart />
                                            Charts
                                            <DownOutlined />
                                        </Space>
                                    </span>
                                </>
                            </Dropdown>,
                        },
                        {
                            key: '9',
                            // label: 'UI Kit' ,
                            icon: <Dropdown
                                menu={{
                                    Table_items,
                                }}
                                trigger={['click']}
                            >
                                <>
                                    <span onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <TbTable />
                                            Table
                                            <DownOutlined />
                                        </Space>
                                    </span>
                                </>
                            </Dropdown>,
                        },
                        {
                            key: '10',
                            // label: 'UI Kit' ,
                            icon: <Dropdown
                                menu={{
                                    Icons_items,
                                }}
                                trigger={['click']}
                            >
                                <>
                                    <span onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <SiIconify />
                                            Icons
                                            <DownOutlined />
                                        </Space>
                                    </span>
                                </>
                            </Dropdown>,
                        },

                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Navbar></Navbar>
                </Header>
                <Content

                    style={{
                        // margin: '24px 16px',
                        // padding: 24,
                        // minHeight: 280,
                        // background: colorBgContainer,
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    <div className='db'>
                        <div className='welcome'>
                            <h2>Welcome to Dashboard</h2>

                        </div>
                        <div className='leftbt'>
                            <DatePicker className='datePicker' defaultValue={dayjs('25/12/2022', dateFormatList[0])} format={dateFormatList} />
                            <Button className='printBtn' icon={<AiOutlinePrinter />}>Print</Button>
                            <Button className='reportBtn' icon={<AiOutlineCloudDownload />}>Download Report</Button>
                        </div>
                    </div>
                    <div className='graphCards'>
                        <GraphCards></GraphCards>
                    </div>
                    <div className='REVENUEgraph'>
                        <REVENUEgraph></REVENUEgraph>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Deshboard;