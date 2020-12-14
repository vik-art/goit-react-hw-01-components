import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './Friends.module.css';

function FriendList ({ items }) {
    return (
        <div>
        <h2>Task 3</h2>
        <ul className={s.list}>
            {items.map((item) =>
                <FriendListItem key={item.id} name={item.name} avatar={item.avatar} isOnline = {item.isOnline}/>
            )}
        </ul>
        </div>
    )
}
export default FriendList;