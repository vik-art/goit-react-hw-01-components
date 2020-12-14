import React from 'react';
import PropTypes from 'prop-types';

import s from "./Transactions.module.css"

export default function TransactionHistory ({ items }){
    return (
        <div>
            <h2>Task 4</h2>
    <table className={s.transhistory}>
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
        {
        items.map(item => (
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        ))
  }
  </tbody>
      </table>
      </div>
      );
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}