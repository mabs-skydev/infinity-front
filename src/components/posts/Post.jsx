import React from 'react';
import Comment from './Comment';
import TextArea from './../common/TextArea';

const Post = ({post, onAddComment, onDeletePost}) => {
    const addComment = text => {
        onAddComment(post.id, text);
    }

    return (
        <>
            <div className="post">
                <h3 className="post__name">
                    {post.user.name}
                    {
                        post.user.id === parseInt(localStorage.getItem('user')) && <span 
                        className="post__delete"
                        onClick={() => {onDeletePost(post.id)}}    
                        >
                            delete
                        </span>
                    }                    
                    
                </h3>
                <p className="post__body">
                    {post.body}
                </p>
                <div className="comments-box">
                    <TextArea placeholder="Write a comment..." onSubmit={addComment} />

                    <div className="comments">
                        <div className="comments__counter"> {`${post.comments? post.comments.length : 0} comments`} </div>
                        {post.comments && post.comments.map(comment => <Comment comment={comment} key={comment.id} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;