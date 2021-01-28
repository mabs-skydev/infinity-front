import React from 'react';

const Comment = ({comment}) => {
    return (
        <>
            <div className="comment">
                <h4 className="comment__name">{comment.user.name}</h4>
                <p className="comment__body">{comment.body}</p>
            </div>
        </>
    );
}
 
export default Comment;