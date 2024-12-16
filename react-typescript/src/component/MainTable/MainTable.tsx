import "./MainTable.scss";
import "../BoxMedium/BoxMedium.scss";



function MainTable() {
    return (
        <div id="mainTable" className="box-large">
            <div className="phoneList">
                <div className="phone-name">Headphones Wireless</div>               
                <div className="price">103.2</div>
                <div className="over-button">
                    <button className="button-edit">Edit</button>
                    <button className="button-buy" id="1020155">Buy</button>
                </div>
            </div>
            <div className="phoneList">
                <div className="phone-name">Headphones Wireless</div>               
                <div className="price">103.2</div>
                <div className="over-button">
                    <button className="button-edit">Edit</button>
                    <button className="button-buy" id="1020155">Buy</button>
                </div>
            </div>
            <div className="phoneList">
                <div className="phone-name">Headphones Wireless</div>               
                <div className="price">103.2</div>
                <div className="over-button">
                    <button className="button-edit">Edit</button>
                    <button className="button-buy" id="1020155">Buy</button>
                </div>
            </div>
        </div>
    );
  }

  export default MainTable;