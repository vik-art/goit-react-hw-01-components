import React from 'react';
import user from './user.json';
import Profile from './components/Profile';

import Stats from './components/Statistics';
import statistic from './statistical-data.json';

export default function App() {
    return (
        <div>
        <Profile 
        name = {user.name}
        location = {user.location}
        tag = {user.tag}
        avatar = {user.avatar}
        stats = {user.stats}
        />
        <Stats 
        title = "Upload statictic"
        stats = {statistic}
        />
        </div>
    )
}