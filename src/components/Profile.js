import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({
    name, tag, location, avatar, stats,
}) => {
    return (
    <div className="profile" key={tag}>
        <h2>Task 1</h2>
          <div className="description">
    <img
      src={avatar}
      alt={name}
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
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