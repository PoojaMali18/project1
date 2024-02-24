import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import './style.css';
const Fetchdata = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <table className='tablee'>
               
                <tbody>
  {data.map((crypto, index) => (
    crypto ? <TableRow key={index} crypto={crypto} /> : null
  ))}
</tbody>
            </table>
        </div>
    );
};

export default Fetchdata;
