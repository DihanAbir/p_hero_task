import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Buy from "./Component/Buy/Buy";
import Sell from "./Component/Buy/Sell/Sell";
import Sell2 from "./Component/Buy/Sell/Sell2/Sell2";
import Sell3 from "./Component/Buy/Sell/Sell3/Sell3";
import Sell4 from "./Component/Buy/Sell/Sell4/Sell4";
import Sell5 from "./Component/Buy/Sell/Sell5/Sell5";
import Navbar from "./Component/Navbar/Navbar";
import Buy1 from "./Pages/Buy1/Buy1";
import Buy2 from "./Pages/Buy2/Buy2";
import Buy3 from "./Pages/Buy3/Buy3";
import FinnalBuy from "./Pages/FinnalBuy/FinnalBuy";


export const fromContext = createContext()
function App() {

  const [formInput, setFormInput] = useState({});
  const [ sellInfo, setSellInfo ] = useState({});
  
  // console.log(formInput);

  return (
    <fromContext.Provider value={[ formInput, setFormInput, sellInfo, setSellInfo ]}>
    <Router>
    <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Buy></Buy>
        </Route>
        <Route exact path="/buy1">
          <Buy1></Buy1>
        </Route>
        <Route exact path="/sell1">
          <Sell></Sell>
        </Route>
        <Route exact path="/buy2">
          <Buy2></Buy2>
        </Route>
        <Route exact path="/buy3">
          <Buy3></Buy3>
        </Route>
        <Route exact path="/sell2">
          <Sell2></Sell2>
        </Route>
        <Route exact path="/sell3">
          <Sell3></Sell3>
        </Route>
        <Route exact path="/sell4">
          <Sell4></Sell4>
        </Route>
        <Route exact path="/sell5">
          <Sell5></Sell5>
        </Route>
        <Route exact path="/finnal_buy">
          <FinnalBuy></FinnalBuy>
        </Route>
      </Switch>
    </Router>
    </fromContext.Provider>
  );
}

export default App;
