import React from 'react';
import moment from 'moment';

const formatDayMonth = date => moment(date).format('DD MMM');
const formatHourMinutes = date => moment(date).format('h:mm');

const Transaction = ({ time, from, to, rate, amount }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDayMonth(time)}</span>
      <span className="transaction__time">{formatHourMinutes(time)}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default Transaction;
