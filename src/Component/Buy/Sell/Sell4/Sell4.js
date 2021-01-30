import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fromContext } from '../../../../App';
import Blink from 'react-blink-text';

function Sell4() {
    const [ sellInfo, setSellInfo ] = useContext(fromContext);
    const [TXID, setTXID] = useState(null);
  
    const TXIDdHandler = (e) => {
      const value = (e.target.value);
      console.log(typeof('DA5S357T243' ));
      if ( value === 'DA5S357T243'  ){
        setTXID(e.target.value);
      }
      else{
        alert("Please Enter valid Address")
      }
    }
  
    const formHandler = (e) => {
      // e.preventDefault();
      setSellInfo({ ...sellInfo, TXID: TXID });
    };
    useEffect(() => {
      console.log("sell2", sellInfo);
    }, [sellInfo]);



    return (
        <div className="main-section text-center fonm_submit">
            <p>Check with this BAN address</p>
            <b>DA5S357T243</b>
            <Blink color='green' text='Demo Address' fontSize='20'/>

            <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            name="Quantity"
            placeholder="Enter your quantity"
            value={TXID}
            onBlur={TXIDdHandler}
          />
          <h3>Selected Token: {TXID}</h3>
          <br />

          <Link to="/sell5">
            {
              TXID === null ? '' : 
              <input className='btn btn-success px-5 mt-3' type="submit" onClick={formHandler} />
            }
          </Link>
        </form>
            
        </div>
    );
}

export default Sell4;