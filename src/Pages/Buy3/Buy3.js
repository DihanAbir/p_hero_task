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

function Buy3() {
  const [selectBank, setselectBank] = useState("");
  const [formInput, setFormInput] = useContext(fromContext);

  const selectBankHandler = (e) => {
    setselectBank(e.target.value);
  };

  const formHandler = (e) => {
    // e.preventDefault();
    setFormInput({ ...formInput, selectBank: selectBank });
  };
  useEffect(() => {
    console.log("form2", formInput);
  }, [formInput]);

  // console.log(formInput);
  return (
    <div className="main-section text-center">
      <form onClick={(e) => { e.preventDefault(); }} >
      <div className="fonm_submit">
      <select value={selectBank} onChange={selectBankHandler}>
          <option value="Bank1">Bank1</option>
          <option value="Bank2">Bank2</option>
          <option value="Bank3">Bank3</option>
          <option value="Bank4">Bank4</option>
        </select>
        <br />

        <Link to="/finnal_buy">
          <input className='btn btn-success px-5 mt-3' type="submit" onClick={formHandler} />
        </Link>
      </div>
        
      </form>
    </div>
  );
}

export default Buy3;
