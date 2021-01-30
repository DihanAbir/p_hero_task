import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fromContext } from '../../../../App';
import Blink from 'react-blink-text';

function Sell2() {
  var WAValidator = require('wallet-address-validator');
    const [ sellInfo, setSellInfo ] = useContext(fromContext);
   


    const [sellwallet, setSellwallet] = useState(null);
  
    const sellwalletdHandler = (e) => {
      var walletValue = e.target.value
      var valid = WAValidator.validate(walletValue, 'BTC');
      if(valid){
        setSellwallet(e.target.value)
      } 
      else {  
        alert('wrong Input')
      };
  
    }
    const formHandler = (e) => {
      // e.preventDefault();
      setSellInfo({ ...sellInfo, Sellwallet: sellwallet });
    };
    const tokenHandler = (e) => {
      
    }
    useEffect(() => {
      console.log("sell2", sellInfo);
    }, [sellInfo]);



    return (
        <div  className="main-section text-center fonm_submit">
            <p>Check with this wallet address</p>
            
            <p className='text-light'>1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck</p>
            <Blink color='green' text='Demo Address' fontSize='20'/>

            <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            name="Quantity"
            placeholder="Enter your quantity"
            value={sellwallet}
            onBlur={sellwalletdHandler}
          />
          {
            sellwallet === null ? '' : <h3 className='text-warning'>Selected Token: {sellwallet}</h3>
          }
          
          <br />

          <Link to="/sell3">
            {
              sellwallet === null ? '' : <input className='btn btn-success px-5 mt-3' type="submit" onClick={formHandler, tokenHandler} />
          
            }
            </Link>
        </form>
            
        </div>
    );
}

export default Sell2;