import { useContext, useState } from "react";
import { MyCouter } from '../../Contexts.js';
import "./SimpleRow.scss";

interface SimpleRowProps {
    title: string;
    price: number;
}

export default function SimpleRow({ price, title }: SimpleRowProps) {
    const [ItemStatus, setItemStatus] = useState('Available 555');
    const counter = useContext(MyCouter);

    function buyItem() {
        setItemStatus('Sold 777');
    }

    return (
        <div className="simple-row">
            item: {title} --- price: {price}

            <div className="item-status">
                <button className="buy-button" onClick={buyItem}>Buy</button>
                status: {ItemStatus}
                couter: {counter}
            </div>
        </div>
    )
}