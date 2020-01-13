import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.shpalery} src="https://zakarpat.brovdi.art/images/ca-painters/_background/_nophoto.png" />
            </div>
            <div className={s.descriptionBlock}>
                ava+discriptin
            </div>
        </div>
    );
}

export default ProfileInfo;