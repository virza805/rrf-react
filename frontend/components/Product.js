import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const product = this.props.product;
        return (
            <div>
                <h5>{product.name}</h5>
            </div>
        )
    }
}
