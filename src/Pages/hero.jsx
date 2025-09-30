import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <main className='hero'>
        <div className="hero-content">
            <div className="hero-text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
                    OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button className='btn-shop'>SHOP NOW</button>
                    <button className='btn-cate'>Category</button>
                </div>
                <div className="hero-shop">
                    <p>Also Available On:</p>
                    <div className="brand-icon">
                        <img src="image/flipkart.png" alt="Flipkart" className="brand-logo"/>
                        <img src="image/amazon.png" alt="Amazon" className="brand-logo"/>
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="image/hero-image.png" alt="Premium Shoes" className="hero-img" />
            </div>
        </div>
    </main>
  )
}

export default Hero