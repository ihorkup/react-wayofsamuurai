import React from 'react';
import s from './Friends.module.css';
import Sitebar from './../Navbar/Sitebar/Sitebar';
import Friend from './Friend/Friend';

const Friends = (props) => {
    
    let friendsElements = props.state.friends.map(d => <Friend name={d.name} id={d.id} src={d.src} />);

    return (
        <div className={s.friends}>
            Friends
            <div className={s.friendsItem}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;