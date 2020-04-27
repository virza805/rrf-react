import React, { Component } from 'react'
import Router from 'next/router'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        $name: String!,
        $image: String!,
        $content: String!,
        $saleprice: Int,
        $price: Int!
    ){
        createProduct(
            name: $name,
            image: $image,
            content: $content,
            saleprice: $saleprice,
            price: $price

            ){
            id
        }
    }
`;


class CreateProduct extends Component {
    state = {
        name: '',
        image: '',
        content: '',
        saleprice: '',
        price: ''
    };
    handleChange = e => {
        const {name, type, value} = e.target;
        this.setState({ [name]: e.target.value });
    };
    render() {
        return (
            <div>
                <h2>Add New Product</h2>
                <Mutation mutation={CREATE_PRODUCT_MUTATION} variables={this.state}>
                    {(createProduct, {loading, error}) => (
                       
                <form 
                action=""
                onSubmit={async e => {
                    e.preventDefault();

                    const res = await createProduct();
                    console.log(res);

                    Router.push({
                        pathname: '/admin/products'
                    });
                    
                }}
                >
                    <fieldset disabled={loading}>
                        <p>
                        <label htmlFor="name">Title</label>
                        <input
                        id="name"
                        name="name" 
                        value= {this.state.name} 
                        placeholder="post title" 
                        type="text"
                        onChange = {this.handleChange}
                        />
                        </p>
                        <p>
                        <label htmlFor="image">Image</label>
                        <input
                        id="image"
                        name="image" 
                        value= {this.state.image} 
                        placeholder="post image" 
                        type="text"
                        onChange = {this.handleChange}
                        />
                        </p>
                        <p>
                        <label htmlFor="price">Price</label>
                        <input
                        id="price"
                        name="price" 
                        value= {this.state.price} 
                        placeholder="134" 
                        type="number"
                        onChange = {this.handleChange}
                        />
                        </p>
                        <p>
                        <label htmlFor="saleprice">Saleprice</label>
                        <input
                        id="saleprice"
                        name="saleprice" 
                        value= {this.state.saleprice} 
                        placeholder="123" 
                        type="number"
                        onChange = {this.handleChange}
                        />
                        </p>

                   


                        <p>
                        <label htmlFor="content">Content</label>

                        <textarea
                        name="content" 
                        id="content" 
                        cols="30" 
                        rows="10"
                        value= {this.state.content} 
                        placeholder="Type Product content"
                        onChange = {this.handleChange}
                        />
                        </p>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form> 
                )}
                </Mutation>               
            </div>
        )
    }
}
export default CreateProduct;