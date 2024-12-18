import "./EnterBoxAddNewPhone.scss";
import { useState } from 'react';



function EnterBoxAddNewPhone() {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
    };

    return (
    <div className="box-large-page2">
        <div className="box-medium-page2">
            <div className="input-text">Name</div>
            <input
                type="text"
                className="input-box"
                id="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter phone name"
                />
        </div>
        <div className="box-medium-page2">
            <div className="input-text">Price</div>
            <input
                type="text"
                className="input-box"
                id="price"
                value={price}
                onChange={handlePriceChange}
                placeholder="Enter phone price"
                />
        </div>
    </div> 
    );
  }

  export default EnterBoxAddNewPhone;