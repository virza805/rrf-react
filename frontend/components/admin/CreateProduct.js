import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION($name: String!){
        createProducts(name: $name){
            id
        }
    }
`;


class CreateProduct extends Component {
    state = {
        name: ''
    };
    handleChange = e => {
        this.setState({ name: e.target.value });
    };
    render() {
        return (
            <div>
                <Mutation mutation={CREATE_PRODUCT_MUTATION} variables={this.state}>
                    {(createProduct, {loading, error}) => (
                       
                <form 
                action=""
                onSubmit={async e => {
                    e.preventDefault();

                    const res = await createProduct();
                    console.log(res);
                    
                }}
                >
                    <fieldset disabled={loading}>
                        <p>
                        <label htmlFor="name">Title</label>
                        <input
                        id="name"
                        name="name" 
                        value= {this.state.name} 
                        placeholder="Product title" 
                        type="text"
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