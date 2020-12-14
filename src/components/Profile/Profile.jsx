import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.css'

import defaultImage from '../default.png'

const Profile = ({
    name,
    tag, 
    location, 
    avatar = {defaultImage},
    stats,
}) => {
    return (
    <div className={s.profile} key={tag}>
        <h2>Task 1</h2>
        <div className={s.card}>
          <div className={s.description}>
    <img
      src={avatar}
      alt={name}
      className={s.avatar} width="150" height="150"
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers </span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views </span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes </span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
</div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default Profile;