import "./SideBar.scss";

function SideBar() {
    return (
        <div className="sidebar">
        <a href="phonelist.html" className="phone-list-side-bar phone-list-side-bar-first"><b>Phone List</b></a>
        <a href="addnewphone.html" className="phone-list-side-bar">Add new phone</a>
        <a href="ShoppingCart.html" className="phone-list-side-bar">Shopping Cart</a>
    </div>
    );
  }

  export default SideBar;