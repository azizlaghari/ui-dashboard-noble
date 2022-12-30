import { Badge, Button, Dropdown, Input } from 'antd';
import React from 'react'
import { AiOutlineBell } from 'react-icons/ai';
import { BsBoundingBox, BsSearch } from 'react-icons/bs';
import { FiBox } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import '../styles/layout/navbar.css';

// Language Dropdown
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                English
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                French
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                German
            </a>
        ),
    },
];
// Web App Dropdown
const WebAppitems = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                English
            </a>
        ),
        icon: <FiBox />,
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                French
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                German
            </a>
        ),
    },
];

const Navbar = () => {
    return (
        <div className='navbar_'>
            <BsSearch className='searchIcon' />
            <Input placeholder="search here..." className='searchBar' />
            <Dropdown
                className='languageDropdown'
                menu={{
                    items,
                }}
                placement="bottomRight"
                arrow={{
                    pointAtCenter: true,
                }}
            >
                <Button>English</Button>
            </Dropdown>

            <Dropdown
                className='webappDropdown'
                menu={{
                    WebAppitems,
                }}
                placement="bottomRight"
                arrow={{
                    pointAtCenter: true,
                }}
            >
                <>
                    <Button><BsBoundingBox className='boxesIcon' /></Button>
                </>
            </Dropdown>

            <HiOutlineMail className='emailIcon' />
            {/* <AiOutlineBell className='bellIcon' /> */}
            <Badge dot className='badgeDot'>
                <AiOutlineBell
                    className='bellIcon'
                    style={{
                        fontSize: 25,

                    }}
                />
            </Badge>
        </div >
    )
}

export default Navbar