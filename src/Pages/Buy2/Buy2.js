import { useContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { fromContext } from "../../App";


function Buy2() {
  const [ formInput, setFormInput ] = useContext(fromContext);
  const [walletAddress, setWalletAddress] = useState('');
  

    const walletAddressdHandler = (e) => setWalletAddress(e.target.value);
    const formHandler = (e) => {
      // e.preventDefault();
      setFormInput({...formInput, walletAddress: walletAddress });
    };
    useEffect(() => {
      console.log('form2', formInput);
    }, [formInput]);
    
    // console.log(formInput);
    return (
        <div className="main-section text-center">
            <form onClick={(e) => {e.preventDefault();}}>
              <div className="fonm_submit">
              <input
            name="Quantity"
            placeholder="walletAddress"
            type="text"
            value={walletAddress}
            onChange={walletAddressdHandler}
          />
          <br />

          <Link to="/buy3">
            <input className='btn btn-success px-5 mt-3' type="submit" onClick={formHandler}  />
          </Link>
              </div>
         

        </form>
        </div>
    );
}

export default Buy2;