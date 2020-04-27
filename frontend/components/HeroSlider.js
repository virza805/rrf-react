import React, { Component } from 'react';
import Head from 'next/head';
import Slider from 'react-slick';

export default class HeroSlider extends Component {
  render() {
    var settings = {
      nav: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
        </Head>

        <div className="slider-area">
          <Slider {...settings}>
            <div className="single-slide-item">
              <div className="slide-bg">
                <img src="/static/rose.jpg " alt="" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center my-auto">
                    <div className="slide-text">
                      <h2>Healthy food</h2>
                      <p>the food that is cooked with love</p>
                      <a href="/" className="boxed-btn">
                        Hello
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-slide-item">
              <div className="slide-bg">
                <img src="/static/1.jpg" alt="" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center my-auto">
                    <div className="slide-text">
                      <h2>Healthy food</h2>
                      <p>the food that is cooked with love</p>
                      <a href="/" className="boxed-btn">
                        Hello
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
