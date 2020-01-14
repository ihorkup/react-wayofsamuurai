import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://yt3.ggpht.com/a/AGF-l7_cXDFOrOosLmrw5ds970Kx7YndyeLYz62H_g=s100-c-k-c0xffffffff-no-rj-mo' />
            {props.message}
            <div>
                {props.likeCount}
                <span> Like</span>
                <p> </p>
            </div>
        </div>

    );
}

export default Post;