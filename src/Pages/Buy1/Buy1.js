import { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { fromContext } from "../../App";
import "./Buy.css";

function Buy1() {
  // States
  const [formInput, setFormInput] = useContext(fromContext);
  const [coin, setCoinn] = useState("Bangladesh");
  const [quantity, setQuantity] = useState(null);

  // Custome functions
  const selectedHandler = (e) => {
    setCoinn(e.target.value);
  };
  const quantitydHandler = (e) => setQuantity(e.target.value);
  const formHandler = (e) => {
    setFormInput({ coin: coin, Quantity: quantity });
  };

  // UseEffect
  useEffect(() => {
    // const url = 'https://restcountries.eu/rest/v2/all?fbclid=IwAR1hzE5FtyZadmHiE1hM-U1EF4VdjVEveIfdweS5u9A7ACcCbPZ7wSsguNk'
    // fetch(url)
    // .then ((res) => res.json())
    // .then ((data) => {
    //   console.log([data.[0].currencies[0].code[0]])
    // })
  }, [formInput]);

  return (
    <div className="main-section text-center">
      <section>
        <h2 className="mt-5 text-primary">Stablecoin gateway - BUY</h2>
        <form onClick={(e) => {e.preventDefault();}}>
          <div className="fonm_submit">
            <select value={coin} onChange={selectedHandler}>
              <option value="Bangladesh">BDT</option>
              <option value="America">Doller$</option>
              <option value="Russia">Crypytoruble</option>
              <option value="Sweden">E-Krona
</option>
              <option value="Japan">J-Coin</option>
              <option value="Venezuela">Petro</option>
              <option value="Estonia">Estcoin</option>
            </select>
            <br />
            <input
              name="Quantity"
              placeholder="Enter your quantity"
              value={quantity}
              onChange={quantitydHandler}
            />
          </div>
          <div className="fonm_submit">
          <h3>Selected Country: {coin}</h3><br />
          <Link to="/buy2">
            <input  className='btn btn-success px-5 mt-3' type="submit"  onClick={formHandler} />
          </Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Buy1;
