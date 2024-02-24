import React from 'react';

const TableRow = ({ crypto }) => 
{
  const { name, symbol, current_price, total_volume } = crypto;

  return (
    <tr>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${current_price}</td>
      <td>${total_volume}</td>
    </tr>
  );
};

export default TableRow;
