import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { fromContext } from '../../../../App';

function Sell5() {
    const [ sellInfo, setSellInfo ] = useContext(fromContext);
    console.log("sell5", sellInfo);
    return (
        <div  className="main-section text-center fonm_submit text-light" >

        <div>
            <h2>Token: {sellInfo.tokenSell}</h2>
            <h2>Token: {sellInfo.TXID}</h2>
            <h2>Token: {sellInfo.Sellwallet}</h2>
            <h2>Token: {sellInfo.IBN}</h2>

            <Link to='/'><button className='btn btn-success mt-5'> Succesfullly Done </button></Link>
        </div>
        </div>
    );
}

export default Sell5;