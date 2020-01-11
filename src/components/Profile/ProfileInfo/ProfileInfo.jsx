import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.shpalery} src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava+discriptin
            </div>
        </div>
    );
}

export default ProfileInfo;