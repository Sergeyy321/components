import {
  Table,
  TransactionInformation,
} from 'components/TransactionHistory/TransactionHistory.styled';

import PropTypes from 'prop-types';
export const TransactionHistory = ({transactions}) => {
    return (
      <Table>
        <thead>
          <TransactionInformation>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TransactionInformation>
        </thead>
        {transactions.map(el => (
          <tbody key={el.id}>
            <TransactionInformation>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </TransactionInformation>
          </tbody>
        ))}
      </Table>
    );





}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};