import React, { Component } from 'react';
import Navigation from './../layouts/Navigation';
import Footer from './../layouts/Footer';
import List from './../posts/List';
import { loadPosts, addPost, addComment } from './../../store/entities/posts';
import { connect } from 'react-redux';

class Home extends Component {
    state = { 
        posts: [
            {
                "id": 2,
                "user_id": 1,
                "body": "from postman",
                "created_at": "2021-01-28T14:39:08.000000Z",
                "updated_at": "2021-01-28T14:39:08.000000Z",
                "comments": [],
                "user": {
                    "id": 1,
                    "name": "Mohamed Ali",
                    "email": "test@email.com",
                    "email_verified_at": null,
                    "created_at": "2021-01-28T14:11:03.000000Z",
                    "updated_at": "2021-01-28T14:11:03.000000Z"
                }
            },
            {
                "id": 1,
                "user_id": 1,
                "body": "this is a test",
                "created_at": null,
                "updated_at": null,
                "comments": [
                    {
                        "id": 1,
                        "user_id": 1,
                        "post_id": 1,
                        "body": "fafafafaf",
                        "created_at": null,
                        "updated_at": null,
                        "user": {
                            "id": 1,
                            "name": "Mohamed Ali",
                            "email": "test@email.com",
                            "email_verified_at": null,
                            "created_at": "2021-01-28T14:11:03.000000Z",
                            "updated_at": "2021-01-28T14:11:03.000000Z"
                        }
                    },
                    {
                        "id": 2,
                        "user_id": 1,
                        "post_id": 1,
                        "body": "comment from postman",
                        "created_at": "2021-01-28T14:59:26.000000Z",
                        "updated_at": "2021-01-28T14:59:26.000000Z",
                        "user": {
                            "id": 1,
                            "name": "Mohamed Ali",
                            "email": "test@email.com",
                            "email_verified_at": null,
                            "created_at": "2021-01-28T14:11:03.000000Z",
                            "updated_at": "2021-01-28T14:11:03.000000Z"
                        }
                    }
                ],
                "user": {
                    "id": 1,
                    "name": "Mohamed Ali",
                    "email": "test@email.com",
                    "email_verified_at": null,
                    "created_at": "2021-01-28T14:11:03.000000Z",
                    "updated_at": "2021-01-28T14:11:03.000000Z"
                }
            }
        ]
    }

    handleAddPost = body => {
        this.props.addPost(body);
    }

    handleAddComment = (id, text) => {
        this.props.addComment(id, text);
    }

    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        const {posts} = this.props;
        
        return (
            <>
                <Navigation />

                <div className="container">
                    <List posts={posts} onAddPost={this.handleAddPost} onAddComment={this.handleAddComment} />
                </div>

                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.entities.posts.list,
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => { dispatch(loadPosts()) },
    addPost: body => { dispatch(addPost(body)) },
    addComment: (id, text) => { dispatch(addComment(id, text)) }
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);