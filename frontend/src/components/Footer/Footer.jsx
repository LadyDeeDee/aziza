import React from 'react'
import "./Footer.css"
import fbImg from "../../img/fb.svg"
import instaImg from "../../img/insta.svg"
import pintImg from "../../img/pint.svg"
import faceImg from "../../img/face.png"

export default function Footer() {
  return (
    <footer className="footer">
        <section className="subscribe">
            <div className="container">
                <div className="avis"> 
                    <img src={faceImg} alt="avis"/>
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
                </div>
                <div className="connect">
                    <h4>SUBSCRIBE</h4>
                    <p>FOR OUR NEWLETTER AND PROMOTION</p>
                    <div className="subscription">
                        <input type="email"  placeholder="Enter your email" />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="copyright">
            <div className="container">
                <p>© 2022  AzizA Brand  All Rights Reserved.</p>
                <div className="messengers">
                    <img src={fbImg} alt="fb"/>
                    <img src={instaImg} alt="insta"/>
                    <img src={pintImg} alt="pint"/>
                </div>
            </div>
        </section>
    </footer>
  )
}


