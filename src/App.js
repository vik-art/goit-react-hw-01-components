import React from 'react';

import user from './user.json';
import Profile from './components/Profile/Profile';

import Stats from './components/Statistic/Statistics';
import statistic from './statistical-data.json';

import FriendList from './components/Friends/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './transaction-history.json';

import s from './base/main.module.css'

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
        <FriendList 
        items={friends}
        />
        <TransactionHistory 
        items={transactions}
        />
        </div>
    )
}