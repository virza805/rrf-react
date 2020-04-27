import React, { Component } from 'react';
import Slider from 'react-slick';

export default class DealProducts extends Component {
  render() {
    var prevarrow = 'test';
    var settings = {
      nav: true,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="deal-products">
        <div className="container">
          <div className="row">
            <div className="col">
              <Slider {...settings}>
                <div className="single-deal-product">
                  <div className="row">
                    <div className="col">
                      <div className="deal-product-thumb">
                        <img src="/static/abc.jpg " alt="" />
                      </div>
                    </div>
                    <div className="col my-auto text-center">
                      <h3>Orange tomato</h3>
                      <p className="price">
                        $5.99 <del>$7.99</del>
                      </p>
                      <a href="" className="boxed-btn">
                        add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-deal-product">
                  <div className="row">
                    <div className="col">
                      <div className="deal-product-thumb">
                        <img src="/static/slid.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col my-auto text-center">
                      <h3>Orange tomato</h3>
                      <p className="price">
                        $5.99 <del>$7.99</del>
                      </p>
                      <a href="" className="boxed-btn">
                        add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
