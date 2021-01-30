import React from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(props) {
  return (
    <div className='container text-center mt-4'>
       <Link to="/sell1" className='text-light Link '>  <Button  disableElevation variant="contained"  color="secondary"> Sell</Button></Link> 
        <Link to="/buy1" className='text-light Link '> <Button  disableElevation variant="contained"  color="secondary"> Buy</Button></Link>

    </div>
  );
}

export default Navbar;
