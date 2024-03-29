import React from "react";
import { Transaction } from "./Transaction";
import { CONFIG } from "./Config";
import { Image } from "./Image";

export function Transactions(props : {
    children?: React.JSX.Element[],
    transactions: typeof CONFIG['transactions'],
    icons: React.JSX.Element[],
    setSelected: React.Dispatch<React.SetStateAction<number>>,
    setSlide: React.Dispatch<React.SetStateAction<boolean>>,
}) {

    const handleSelection = (i: number) => {
        props.setSelected(i);
        props.setSlide(true);
    };

    let ad = <Image src="../static/images/ad.png" style={{
        width: "100%",
        objectFit: "scale-down",
        marginBottom: "20px"
    }}/>;

    let transactions: React.JSX.Element[] = [];

    for (let i = 0; i < props.transactions.length; i++) {
        transactions.push(<div
            onClick={(evt) => handleSelection(i)}
        >
            <Transaction transaction={props.transactions[i]} icon={props.icons[i]} />
        </div>);
    }

    return <div 
    style={{
        display:"flex",
        flexDirection: "column",
        width: "100%",
    }}>
        {ad}
        {...transactions}
    </div>;
}