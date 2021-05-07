import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3001/posts')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    post: res.data,
                })
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3001/posts/${data}`).then((res) => {
            console.log(res);
            this.getPostAPI();
        })
    }

    handleFormChange = () => {
        console.log("form change")
    }

    componentDidMount() {
        this.getPostAPI();
    }
    render() {
        return (
            <Fragment>
                <p className="section-title">BlogPost </p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" id="" onChange={this.handleFormChange} />
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="body-content" id="body-content" cols="30" rows="10" placeholder="add blog content"></textarea>
                    <button className="btn-simpan">Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />

                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;