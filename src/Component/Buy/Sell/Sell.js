import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fromContext } from "../../../App";

function Sell(props) {
  const [sellInfo, setSellInfo] = useContext(fromContext);

  const [token, setToken] = useState("");
  const [quantity, setQuantity] = useState(null);

  const tokendHandler = (e) => {
    setToken(e.target.value);
  };

  const quantitydHandler = (e) => setQuantity(e.target.value);

  const formHandler = (e) => {
    // e.preventDefault();
    setSellInfo({ coin: token, tokenSell: quantity });
  };
  useEffect(() => {
    console.log("sell2", sellInfo);
  }, [sellInfo]);

  return (
    <div className="main-section text-center fonm_submit">
      <div>
        <h4>Welcome to sell your coins</h4>

        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <select className="my-2" value={token} onChange={tokendHandler}>
            <option value="Bangladesh">BDT</option>
            <option value="America">Doller$</option>
            <option value="Russia">Crypytoruble</option>
            <option value="Sweden">E-Krona</option>
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
          <h3>Selected Token: {token}</h3>
          <br />

          <Link to="/sell2">
            <input
              className="btn btn-success px-5 mt-3"
              type="submit"
              onClick={formHandler}
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Sell;
