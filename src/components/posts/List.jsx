import React from 'react';
import Post from './Post';
import TextArea from './../common/TextArea';

const List = ({posts}) => {
    const createPost = text => {
        console.log("text:", text)
    }

    return ( 
        <>
            <div className="post post__create">
                <h4>Create new post</h4>
                <div className="comments-box">
                    <TextArea placeholder="Whats in your mind..." onSubmit={createPost} />
                </div>
            </div>
            {posts.map(post => <Post post={post} key={post.id} />)}
        </>
    );
}
 
export default List;