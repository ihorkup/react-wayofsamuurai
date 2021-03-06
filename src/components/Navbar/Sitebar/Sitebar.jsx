import React from 'react';
import s from './../Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Sitebar = (props) => {

    let path = "/friends/" + props.id
    return (<div className={s.itemBlock}> {(props.id <= 3) ?
            <div>
                <img src={props.src}/>
                <NavLink to={path} className={s.name} activeClassName={s.active}>{props.name}</NavLink>
            </div>
            : <p></p>}
    </div>

    )
}

export default Sitebar;