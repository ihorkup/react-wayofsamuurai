import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg' />
            </div>
            <div>
                ava+discriptin
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;