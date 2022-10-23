import React from 'react';
import "./HomePage.css"

import firstImg from "../../img/first.jpg"
import secondImg from "../../img/second.jpg"
import thirdImg from "../../img/third.jpg"
import forthImg from "../../img/forth.jpg"
import fifthImg from "../../img/fifth.jpg"
import sixthImg from "../../img/sixth.jpg"
import carLogo from "../../img/car.svg"
import reductionLogo from "../../img/reduction.svg"
import croneLogo from "../../img/crone.svg"



export default function Home() {
    
    return (
    <div>
        <div className="img-top"></div>
        <div className="top">
            <h2>RêveZ</h2>
        </div>
        <div className="middle `container">
            <section className="promos">
                <div className="women">
                    <p><span>30% OFF</span> FOR WOMEN</p>
                </div>
                <div className="deal">
                    <p><span>30% OF </span>FOR WOMEN</p>
                </div>
                <div className="shoes"><p><span>30% OFF</span> FOR WOMEN</p>
                </div>
                <div className="accessoires"><p>Accessoires</p>
                </div>
            </section>
            <h3 className="catalog-title">Fetured Items</h3>
            <p className='paragraph'>
                Shop for items based on what we featured in this week
            </p>
            <section className="catalog">
                <div className="product"><img src={firstImg} alt=""/>
                    <h5>ELLERY X M'O CAPSULE</h5>
                    <p>Known for her sculptural takes on traditional tailoring, 
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className='price'>$52.00</p></div>
                <div className="product"><img src={secondImg} alt=""/>
                    <h5>ELLERY X M'O CAPSULE</h5>
                    <p>Known for her sculptural takes on traditional tailoring, 
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className='price'>$52.00</p></div>
                <div className="product"><img src={thirdImg} alt=""/>
                    <h5>ELLERY X M'O CAPSULE</h5>
                    <p>Known for her sculptural takes on traditional tailoring, 
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className='price'>$52.00</p></div>
                <div className="product"><img src={forthImg} alt=""/>
                    <h5>ELLERY X M'O CAPSULE</h5>
                    <p>Known for her sculptural takes on traditional tailoring, 
                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className='price'>$52.00</p></div>
                <div className="product"><img src={fifthImg} alt=""/>
                    <h5>ELLERY X M'O CAPSULE</h5>
                    <p>Known for her sculptural takes on traditional tailoring, 
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className='price'>$52.00</p></div>
                <div className="product"><img src={sixthImg} alt=""/>
                    <h5>ELLERY X M'O CAPSULE</h5>
                    <p>Known for her sculptural takes on traditional tailoring, 
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className='price'>$52.00</p></div>
            </section>
            <button className="browse_all">Browse all</button>
        </div>
        <section className="services">
            <div className="container">
                <div className="free_delivery"><img src={carLogo} alt="car"/>
                    <h5>Free Delivery</h5>
                    <p>Worldwide delivery on all. Authorit tively morph next-
                    innovation with extensive models.</p>
                </div>
                <div className="sales"><img src={reductionLogo} alt="reduction"/>
                    <h5>Sales & discounts</h5>
                    <p>Worldwide delivery on all. Authorit tively morph next-
                    innovation with extensive models.</p>
                </div>
                <div className="crone"><img src={croneLogo} alt="crone"/>
                    <h5>Quality assurance</h5>
                    <p>Worldwide delivery on all. Authorit tively morph next-
                    innovation with extensive models.</p>
                </div>
            </div>
        </section>
    </div>
    );
};

