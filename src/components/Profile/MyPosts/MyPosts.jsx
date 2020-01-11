import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

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
                <Post message="It's my first post" like="15" />
                <Post message="I love you" like="16" />
                <Post message="How are you?)" like="14" />
            </div>
        </div>
    );
}

export default MyPosts;