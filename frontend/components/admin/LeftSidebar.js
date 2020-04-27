import React, { Component } from 'react'

class LeftSidebar extends Component {
    render() {
        return (
            <div className="left-sidebar">
                <div className="site-admin-logo">
                <img src="../../static/vir.png" alt="" />
                </div>
                <ul>
                    <li>
                        <a href="/admin">Dashboard</a>
                    </li>
                    <li>
                        <a href="/admin/posts">Posts</a>
                        <ul>
                            <li><a href="/admin/posts">All Posts</a></li>
                            <li><a href="/admin/add-new-post">Add New</a></li>
                            <li><a href="/admin/post-categories">Post Categories</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/admin/products">Products</a>
                        <ul>
                            <li><a href="/admin/products">All Products</a></li>
                            <li><a href="/admin/add-new-product">Add New</a></li>
                            <li><a href="/admin/product-categories">Product Categories</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/admin/users">Users</a>
                        <ul>
                            <li><a href="/admin/users">All Users</a></li>
                            <li><a href="/admin/add-new-user">Add New Users</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/admin/settings">Settings</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LeftSidebar;