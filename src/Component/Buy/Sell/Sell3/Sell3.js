import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fromContext } from '../../../../App';

function Sell3() {
    const [ sellInfo, setSellInfo ] = useContext(fromContext);
    // console.log("sell2", sellInfo);


    const [IBN, setIBN] = useState(null);
  
    const IBNHandler = (e) => setIBN(e.target.value);
  
    const formHandler = (e) => {
      // e.preventDefault();
      setSellInfo({ ...sellInfo, IBN : IBN });
    };
    useEffect(() => {
      console.log("sell2", sellInfo);
    }, [sellInfo]);



    return (
        <div  className="main-section text-center fonm_submit">
            <p>Check with this wallet address</p>
            <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            name="Quantity"
            placeholder="Enter your quantity"
            value={IBN}
            onChange={IBNHandler}
          />
          
          <br />

          <Link to="/sell4">
            <input className='btn btn-success px-5 mt-3' type="submit" onClick={formHandler} />
          </Link>
        </form>
            
        </div>
    );
}

export default Sell3;