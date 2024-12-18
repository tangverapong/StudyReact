import "./TotalBox.scss";

function TotalBox() {
    return (
        <div className="box-total">
            <div className="in-box-cala">
                <div className="phone-name-total-box">Total</div>
                <div className="price-total-box" id="totalPhone">3 phones</div>
                <div>
                    <span>&nbsp;&nbsp;</span>
                    <span className="box-green-total-box"><b id="totalPhonePrice">95,000</b></span>
                </div>
            </div>
        </div> 
    );
  }

  export default TotalBox;