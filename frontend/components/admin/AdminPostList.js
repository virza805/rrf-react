import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ADMIN_POSTS_QUERY = gql`
  query ADMIN_POSTS_QUERY {
    posts {
      id
      content
      title
    }
  }
`;

class AdminPostList extends Component {
  render() {
    return (
      <div>
        <h3>
          Posts{' '}
          <a href="/admin/add-new-post" className="add-new">
            Add New Post
          </a>
        </h3>
        <table className="list-table">
          <thead>
            <tr>
              <th className="name">Name</th>
              <th className="cat">Category</th>
              <th className="date">Date</th>
            </tr>
          </thead>
          <tbody>
            <Query query={ADMIN_POSTS_QUERY}>
              {({ data, error, loading }) => {
                if (loading)
                  return (
                    <tr>
                      <td>Loading</td>
                      <td />
                      <td />
                    </tr>
                  );
                if (error)
                  return (
                    <tr>
                      <td>Error</td>
                      <td />
                      <td />
                    </tr>
                  );
                return data.posts.map(post => (
                  <tr key={post.id}>
                    <td className="name">
                      <h6>
                        <a href="">{post.title}</a>
                      </h6>
                      <span className="hover-only">
                        <a className="edit" href="">
                          Edit
                        </a>
                        <a className="delete" href="">
                          Delete
                        </a>
                      </span>
                    </td>
                    <td className="cat">{post.content}</td>
                    <td className="date">12 December 2019</td>
                  </tr>
                ));
              }}
            </Query>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminPostList;
