import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ADMIN_PRODUCTS_QUERY = gql`
  query ADMIN_PRODUCTS_QUERY {
    products {
      id
      name
      content
      price
      saleprice
      image
    }
  }
`;

class AdminProductsList extends Component {
  render() {
    return (
      <div>
        <h3>
        Products{' '}
          <a href="/admin/add-new-product" className="add-new">
            Add New Product
          </a>
        </h3>
        <table className="list-table">
          <thead>
            <tr>
              <th className="name">ProductName</th>
              <th className="cat">Category</th>
              <th className="cat">Price</th>
              <th className="date">Saleprice</th>
            </tr>
          </thead>
          <tbody>
            <Query query={ADMIN_PRODUCTS_QUERY}>
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
                return data.products.map(product => (
                  <tr key={product.id}>
                    <td className="name">
                      <h6>
                        <a href="">{product.name}</a>
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
                    <td className="cat">{product.content}</td>
                    <td className="cat">{product.price}</td>
                    <td className="date">{product.saleprice}</td>
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

export default AdminProductsList;
