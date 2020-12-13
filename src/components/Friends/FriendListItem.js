import React from 'react';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

import defaultImage from '../default.png'

const FriendListItem = ({ 
    avatar = {defaultImage}, 
    name, 
    isOnline }) => {
    const styleStatus = isOnline === true ? s.active : s.noactive;
    return (
        <li className={s.item}>
            <span className={styleStatus}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt={name} width="30" />
            <p className={s.name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;