import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ title, stats }) => {
    return (
        <section class="statistics">
            <h2>Task 2</h2>
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
      { stats.map((stat, index) => {
    return <li class="item" key = {stat.id}>
    <span class="label">{stat.label}</span><br/>
    <span class="percentage">{stat.percentage} %</span>
    </li>
      }
)}
  </ul>
</section>
    )
}

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Stats;