import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.shpalery} src={require('./wrapper.jpg')} alt="image"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discriptin
            </div>
        </div>
    );
}

export default ProfileInfo;