import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistic.module.css';

const Stats = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
            <h2>Task 2</h2>
            <div className={s.card}>
              {{title} && <h2 className={s.title}>{title}</h2>}
                <ul className={s.list}>
                  { stats.map((stat) => {
                    return <li className={s.item} key = {stat.id}>
                      <span className={s.label}>{stat.label}</span><br/>
                      <span className={s.percentage}>{stat.percentage} %</span>
                      </li>
                      }
                      )}
                </ul>
            </div>
        </section>
    )
}

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Stats;