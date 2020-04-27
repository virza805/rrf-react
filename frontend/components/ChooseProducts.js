import React, { Component } from 'react';

export default class ChooseProducts extends Component {
  render() {
    return (
      <section className="choose-your-products">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Choose Your Product</h2>
                <p>
                  Excellent quality and fast delivery. Just choose the needed
                  products and make an order.
                </p>
                <a href="" className="boxed-btn">
                  add to cart all set
                </a>
                <p>or buy just one</p>
                <img src="/static/arrow-down.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-selection-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="single-selection-product">
                  <div className="prodcut-selection-hover">
                    <div className="product-selction-bg">
                      <img src="/static/admin.jpg" alt="" />
                    </div>
                    <h4>Red onion</h4>
                    <p className="price">$500</p>
                    <a href="" className="boxed-btn">
                      Add to Cart
                    </a>
                  </div>
                  <div className="product-selection-bbg">
                    <img src="/static/admin.jpg" alt="" />
                  </div>
                  <i className="fa fa-angle-down" />
                </div>
                <div className="single-selection-product">
                  <div className="prodcut-selection-hover">
                    <div className="product-selction-bg">
                      <img src="/static/f.png" alt="" />
                    </div>
                    <h4>Red onion</h4>
                    <p className="price">$500</p>
                    <a href="" className="boxed-btn">
                      Add to Cart
                    </a>
                  </div>
                  <div className="product-selection-bbg">
                    <img src="/static/f.png" alt="" />
                  </div>
                  <i className="fa fa-angle-down" />
                </div>
                <div className="single-selection-product">
                  <div className="prodcut-selection-hover">
                    <div className="product-selction-bg">
                      <img src="/static/m.png" alt="" />
                    </div>
                    <h4>Red onion</h4>
                    <p className="price">$500</p>
                    <a href="" className="boxed-btn">
                      Add to Cart
                    </a>
                  </div>
                  <div className="product-selection-bbg">
                    <img src="/static/m.png" alt="" />
                  </div>
                  <i className="fa fa-angle-down" />
                </div>
                <div className="single-selection-product">
                  <div className="prodcut-selection-hover">
                    <div className="product-selction-bg">
                      <img src="/static/pic.jpg" alt="" />
                    </div>
                    <h4>Red onion</h4>
                    <p className="price">$500</p>
                    <a href="" className="boxed-btn">
                      Add to Cart
                    </a>
                  </div>
                  <div className="product-selection-bbg">
                    <img src="/static/pic.jpg" alt="" />
                  </div>
                  <i className="fa fa-angle-down" />
                </div>
                <div className="single-selection-product">
                  <div className="prodcut-selection-hover">
                    <div className="product-selction-bg">
                      <img src="/static/mileam.jpg" alt="" />
                    </div>
                    <h4>Red onion</h4>
                    <p className="price">$500</p>
                    <a href="" className="boxed-btn">
                      Add to Cart
                    </a>
                  </div>
                  <div className="product-selection-bbg">
                    <img src="/static/mileam.jpg" alt="" />
                  </div>
                  <i className="fa fa-angle-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
