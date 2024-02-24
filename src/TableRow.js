import React from 'react';
import './style.css';
const TableRow = ({ crypto }) => 
{
  const { name, symbol, current_price, total_volume,image } = crypto;

  return (
  
    <tr>
      <td> <img src={image} alt={name} style={{ width: '30px', height: '30px', marginRight: '-10px',paddingRight:'-20px' }} /></td>
      <td>{name}</td>
      <td>{symbol.toUpperCase()}</td>
      <td>${current_price}</td>
      <td>${total_volume}</td>
    </tr>
   
   
  );
};

export default TableRow;
