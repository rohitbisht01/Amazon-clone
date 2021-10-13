import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id = '12'
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={30.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              rating={5}
            />
            <Product
              id = '13'
              title="Samsung Galaxy S21 Plus 5G (Phantom Violet, 8GB RAM, 128GB Storage) + Galaxy Buds Pro @990"
              price={76999.00}
              image="https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/Hex_MAy/D23788775_IN_WLD_SamsungBAU_HexCard_1._SY530_QL85_.jpg"
              rating={4}
            />
            <Product
              id = '14'
              title="boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Grey/Green)"
              price={1499.50}
              image="https://images-eu.ssl-images-amazon.com/images/I/41zejggGzLL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id = '15'
              title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
              price={15999.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._SL1500_.jpg"
              rating={5}
            />
            <Product
              id = '16'
              title="s ICE-300TG Mid Tower Gaming Cabinet Computer case Supports ATX, Micro-ATX, Mini-ITX Motherboard with Transparent Tempered Glass Side Panel, 4 x 120 mm Fan (3 Rainbow Front/ 1 Black"
              price={3907.99}
              image="https://images-eu.ssl-images-amazon.com/images/I/41vAaZORwfL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id = '17'
              title="Procus ONE Virtual Reality Headset 40MM Lenses -For IOS and Android – (Black) by PROCUS"
              price={1990.89}
              image="https://m.media-amazon.com/images/I/419tBK3soIL.jpg"
              rating={4}
            />
            <Product
              id = '18'
              title="T-Rock Men's Sneaker"
              price={433.99}
              image="https://images-na.ssl-images-amazon.com/images/I/61t6Mk3v48L._UX695_.jpg"
              rating={4}
            />
            <Product
              id = '19'
              title="Logitech K380 Wireless Multi-Device Bluetooth Keyboard for Windows, Apple iOS, Apple TV, Android or Chrome"
              price={2930.99}
              image="https://images-eu.ssl-images-amazon.com/images/I/61T1QxxeAgL._AC_UL160_SR160,160_.jpg"
              rating={5}
            />
            <Product
              id = '20'
              title="Ferrero Rocher Premium Chocolates 24 Pieces, 300 g"
              price={819.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71uNpGYLbnL._SL1100_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
