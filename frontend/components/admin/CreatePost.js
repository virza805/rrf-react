import React, { Component } from 'react'
import Router from 'next/router'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_POST_MUTATION = gql`
    mutation CREATE_POST_MUTATION(
        $title: String!,
        $image: String!,
        $content: String!
    ){
        createPost(
            title: $title,
            image: $image,
            content: $content

            ){
            id
        }
    }
`;


class CreatePost extends Component {
    state = {
        title: '',
        image: '',
        content: ''
    };
    handleChange = e => {
        const {name, type, value} = e.target;
        this.setState({ [name]: e.target.value });
    };
    render() {
        return (
            <div>
                <h2>Add New Post</h2>
                <Mutation mutation={CREATE_POST_MUTATION} variables={this.state}>
                    {(createPost, {loading, error}) => (
                       
                <form 
                action=""
                onSubmit={async e => {
                    e.preventDefault();

                    const res = await createPost();
                    console.log(res);

                    Router.push({
                        pathname: '/admin/posts'
                    });
                    
                }}
                >
                    <fieldset disabled={loading}>
                        <p>
                        <label htmlFor="title">Title</label>
                        <input
                        id="title"
                        name="title" 
                        value= {this.state.title} 
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
                        <label htmlFor="content">Content</label>

                        <textarea
                        name="content" 
                        id="content" 
                        cols="30" 
                        rows="10"
                        value= {this.state.content} 
                        placeholder="Type post content"
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
export default CreatePost;