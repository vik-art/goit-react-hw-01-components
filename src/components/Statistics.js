import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2>Task 2</h2>
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
      { stats.map((stat, index) => {
    return <li className="item" key = {stat.id}>
    <span className="label">{stat.label}</span><br/>
    <span className="percentage">{stat.percentage} %</span>
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