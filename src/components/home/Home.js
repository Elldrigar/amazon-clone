import React from 'react';
import './home.scss';
import Product from '../product/product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="0001"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="0002"
            title="SonyHoliday Bundle - Playstation 4 1TB Slim- Jet Black"
            price={419.99}
            image="https://m.media-amazon.com/images/I/61yTg6KpelL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="0003"
            title="Learning React: Functional Web Development with React and Redux"
            price={29.99}
            image="https://m.media-amazon.com/images/I/7169mYAhsmL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="0004"
            title="Ripple Junction Playstation Vintage Icon Adult T-Shirt"
            price={14.49}
            image="https://m.media-amazon.com/images/I/61mHWGYENWL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="0003"
            title="The Self-Taught Programmer: The Definitive Guide to Programming Professionally"
            price={19.99}
            image="https://m.media-amazon.com/images/I/51+Z8QVq+WL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="0005"
            title="LG 34WN650-W 34-Inch 21:9 UltraWide Full HD (2560 x 1080) IPS Display with VESA DisplayHDR 400 and AMD FreeSync, Silver"
            price={229.99}
            image="https://m.media-amazon.com/images/I/81GrL4IJNjL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
