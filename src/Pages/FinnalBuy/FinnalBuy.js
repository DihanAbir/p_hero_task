import { useContext } from "react";
import { Link } from "react-router-dom";

import { fromContext } from "../../App";

function FinnalBuy(props) {
  const [formInput, setFormInput] = useContext(fromContext);


  const handlerReview = () =>{
    const newReview = { ...formInput };
    fetch("https://young-anchorage-57844.herokuapp.com/addUserData",{
        method: "POST",
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}

  return (
      <div className="main-section text-center fonm_submit text-light">
        <h2>
          IBAN: <span>SJK3EIU34J2K4</span>{" "}
        </h2>
        <h2>
          Swap ID : <span>921646478336175</span>
        </h2>
        <h2>Wallet address:{formInput.walletAddress} </h2>
        <form method="post" action="/addReview" className="form-order" >
        {/* <button type="submit" onClick={handlerReview} className="mb-5 btn-main"><Link className="btn btn-success" to="/">
            Confirm submission
          </Link></button> */}
          <Link to='/'><button onClick={handlerReview} className='btn btn-success mt-5'> Succesfullly Done </button></Link>
        </form>
      </div>
  );
}

export default FinnalBuy;
