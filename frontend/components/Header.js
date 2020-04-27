import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <span className="header-block">+88 (0) 145 2589 000</span>
              <span className="header-block">+88 (0) 145 2589 000</span>
            </div>
          </div>
          <div className="row header-row">
            <div className="col my-auto">
              <div className="social-icons">
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-youtube" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="col my-auto text-center">
              <div className="logo">
                <a href="/">
                  <img src="/static/logo.png" alt="" />{' '}
                  <p>the food that is cooked with love</p>
                </a>
              </div>
            </div>
            <div className="col my-auto text-right">
              <a href="../admin" className="my-account">
                <img src="/static/user.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <a href="">Vagitables</a>
                  </li>
                  <li>
                    <a href="">Vagitables</a>
                    <ul>
                      <li>
                        <a href="">Drowdown Item</a>
                      </li>
                      <li>
                        <a href="">Drowdown Item</a>
                      </li>
                      <li>
                        <a href="">Drowdown Item</a>
                      </li>
                      <li>
                        <a href="">Drowdown Item</a>
                      </li>
                      <li>
                        <a href="">Drowdown Item</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Vagitables</a>
                  </li>
                  <li>
                    <a href="">Vagitables</a>
                  </li>
                  <li>
                    <a href="">Vagitables</a>
                  </li>
                  <li>
                    <a href="">Vagitables</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
