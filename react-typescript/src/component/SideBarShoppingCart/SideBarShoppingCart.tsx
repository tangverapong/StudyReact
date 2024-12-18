import React from "react";
import { Link } from "react-router-dom";
import "./SideBarShoppingCart.scss";


function SideBar() {
    return (
        <div className="sidebar">
            <Link to="/phone-list" className="phone-list-side-bar phone-list-side-bar-first">Phone List</Link>
            <Link to="/add-new-phone" className="phone-list-side-bar">Add new phone</Link>
            <Link to="/shopping-cart" className="phone-list-side-bar"><b>Shopping Cart</b></Link>
    </div>
    );
  }

  export default SideBar;