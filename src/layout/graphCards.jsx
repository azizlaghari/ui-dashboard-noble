import { Card } from "antd";
import { TinyLine } from "@ant-design/plots";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "../styles/layout/graphCards.css";

const GraphCards = () => {
    // Line Graph
    const data = [
        26, 197, 38, 127, 49, 197, 50, 175, 63, 230, 125, 92, 122, 267, 313,
        546, 483, 340, 339, 443, 526, 692,
    ];
    const config = {
        height: 30,
        autoFit: true,
        data,
        smooth: true,
    };
    // GROWTH Graph
    // const GROWTH_data = [
    //     264, 997, 438, 887, 309, 897, 250, 875, 563, 430, 525, 592, 492, 467, 513,
    //     546, 983, 340, 539, 243, 226, 192,
    // ];
    // const GROWTH_config = {
    //     height: 30,
    //     autoFit: true,
    //     GROWTH_data,
    //     smooth: true,
    // };
    return (
        <div className="container">
            <div className="cards">
                <Card
                    style={{
                        width: 350,
                    }}
                >
                    <div className="firstCard">
                        <div className="amounts">
                            <p className="custumerName">NEW CUSTOMERS</p>
                            <p className="price">3,897</p>
                            <p className="priceUpDown">
                                +3.3% <AiOutlineArrowUp></AiOutlineArrowUp>
                            </p>
                        </div>
                        <div className="graph">
                            <BiDotsHorizontalRounded />
                            <TinyLine {...config} />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="cards">
                <Card
                    style={{
                        width: 350,
                    }}
                >
                    <div className="secondCard">
                        <div className="amounts">
                            <p className="custumerName">NEW ORDERS</p>
                            <p className="priceORDERS">35,084</p>
                            <p className="priceUpDownORDERS">
                                -2.8% <AiOutlineArrowDown className="dotedMenu"></AiOutlineArrowDown>
                            </p>
                        </div>
                        <div className="graph">
                            <BiDotsHorizontalRounded />
                            <TinyLine {...config} />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="cards">
                <Card
                    style={{
                        width: 350,
                    }}
                >
                    <div className="secondCard">
                        <div className="amounts">
                            <p className="custumerName">GROWTH</p>
                            <p className="priceORDERS">89.87%</p>
                            <p className="priceUpORDERS">
                                2.8% <AiOutlineArrowUp className="dotedMenu"></AiOutlineArrowUp>
                            </p>
                        </div>
                        <div className="graph">
                            <BiDotsHorizontalRounded />
                            <TinyLine {...config} />
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default GraphCards;
