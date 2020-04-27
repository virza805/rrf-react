import React, { Component } from 'react'

import {Query} from 'react-apollo'
import gql from 'graphql-tag'

import Product from './Product'


const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY {
        products {
            id
            name
        }
    }
`

class Products extends Component {
    render() {
        return (
            <div>
                <h2>Quering from DB</h2>

                <Query query={ALL_PRODUCTS_QUERY}>
                    {({data, error, loading}) => {
                        if(loading) return <p>Loading</p>
                        if(error) return <p>Error</p>
                        return data.products.map(product => <Product product={product} key={product.id}></Product>)
                    }}
                </Query>
            </div>
        )
    }
}

export default Products;