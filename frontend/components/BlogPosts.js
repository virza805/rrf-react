import React, { Component } from 'react';

export default class BlogPosts extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title text-center">
                <h2>Blog</h2>
                <p>All about proper nutrition</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col">
            <a href="" className="single-blog-post">
              <div className="blog-post-bg">
                <img src="http://placehold.it/400x290" alt="" />
              </div>
              <h3>Seasonal vegetables</h3>
              <p>06.04.2018</p>
            </a>
          </div>
          <div className="col">
            <a href="" className="single-blog-post">
              <div className="blog-post-bg">
                <img src="http://placehold.it/400x290" alt="" />
              </div>
              <h3>Seasonal vegetables</h3>
              <p>06.04.2018</p>
            </a>
          </div>
          <div className="col">
            <a href="" className="single-blog-post">
              <div className="blog-post-bg">
                <img src="http://placehold.it/400x290" alt="" />
              </div>
              <h3>Seasonal vegetables</h3>
              <p>06.04.2018</p>
            </a>
          </div>
          <div className="col">
            <a href="" className="single-blog-post">
              <div className="blog-post-bg">
                <img src="http://placehold.it/400x290" alt="" />
              </div>
              <h3>Seasonal vegetables</h3>
              <p>06.04.2018</p>
            </a>
          </div>
          <div className="col">
            <a href="" className="single-blog-post">
              <div className="blog-post-bg">
                <img src="http://placehold.it/400x290" alt="" />
              </div>
              <h3>Seasonal vegetables</h3>
              <p>06.04.2018</p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
