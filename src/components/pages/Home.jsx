import React, { Component } from 'react';
import Navigation from './../layouts/Navigation';
import Footer from './../layouts/Footer';
import List from './../posts/List';
import { loadPosts, addPost, addComment, deletePost } from './../../store/entities/posts';
import { connect } from 'react-redux';
import { getUserInfo } from '../../services/userService';

class Home extends Component {

    handleAddPost = body => {
        this.props.addPost(body);
    }

    handleAddComment = (id, text) => {
        this.props.addComment(id, text);
    }

    handleDeletePost = id => {
        this.props.deletePost(id);
    }

    async componentDidMount() {
        this.props.loadPosts();
        await getUserInfo();
    }

    render() {
        const {posts} = this.props;
        
        return (
            <>
                <Navigation />

                <div className="container">
                    <List 
                        posts={posts} 
                        onAddPost={this.handleAddPost} 
                        onAddComment={this.handleAddComment} 
                        onDeletePost={this.handleDeletePost}
                        />
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
    addComment: (id, text) => { dispatch(addComment(id, text)) },
    deletePost: id => { dispatch(deletePost(id)) }
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);