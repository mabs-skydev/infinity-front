import React from 'react';
import Comment from './Comment';
import TextArea from './../common/TextArea';

const Post = ({post, onAddComment}) => {
    const addComment = text => {
        onAddComment(post.id, text);
    }

    return (
        <>
            <div className="post">
                <h3 className="post__name">{post.user.name}</h3>
                <p className="post__body">
                    {post.body}
                </p>
                <div className="comments-box">
                    <TextArea placeholder="Write a comment..." onSubmit={addComment} />

                    <div className="comments">
                        {post.comments && post.comments.map(comment => <Comment comment={comment} key={comment.id} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;