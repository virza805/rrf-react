import React, { Component } from 'react';

export default class CategoryGridProducts extends Component {
  render() {
    return (
      <section className="content-block category-grid-products">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title text-center">
                <h2>Featured Categories</h2>
                <p>Healthy food at an affordable price</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <a href="/" className="d-block category-block">
                <div className="category-bg">
                  <img src="/static/rose.jpg" alt="" />
                </div>
                <h3>Fresh ingredients</h3>
                <p>Оnly fresh ingredients</p>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/" className="d-block category-block">
                <div className="category-bg">
                  <img src="/static/1.jpg " alt="" />
                </div>
                <h3>Fresh ingredients</h3>
                <p>Оnly fresh ingredients</p>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/" className="d-block category-block">
                <div className="category-bg">
                  <img src="/static/admin.jpg " alt="" />
                </div>
                <h3>Fresh ingredients</h3>
                <p>Оnly fresh ingredients</p>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/" className="d-block category-block">
                <div className="category-bg">
                  <img src="/static/admins.jpg" alt="" />
                </div>
                <h3>Fresh ingredients</h3>
                <p>Оnly fresh ingredients</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
