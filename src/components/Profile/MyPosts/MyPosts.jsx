import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
    {id: 1, message: "It's my first post", likeCount: "15"},
    {id: 2, message: "I xfbnxcnbcxknb you", likeCount: "111111"},
    {id: 3, message: "How are you?", likeCount: "14"}
]

let postsElements = posts.map( p => <Post message={p.message} likeCount={p.likeCount} />);

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;