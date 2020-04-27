import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="subscribe-area">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2>Subscribe</h2>
                <form action="">
                  <input type="text" placeholder="Email address" />
                  <input type="submit" value="SEnd" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="static/logo.png" alt="" />
              <p>
                1234 Heaven Stress, Beverly Hill.
                <br />
                info@youdomain.com
                <br />
                8:00 - 19:00, Monday - Saturday
              </p>
              <div className="cart-logos">
                <i className="fa" />
              </div>
            </div>
            <div className="col">
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="copyright-text">©Copyrights 2018</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
