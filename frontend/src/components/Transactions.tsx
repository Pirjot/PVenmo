import React from "react";
import { Transaction } from "./Transaction";

export function Transactions(props : {
    children?: React.JSX.Element[]
}) {

    let ad = <img src="../static/images/ad.png" style={{
        width: "100%",
        objectFit: "scale-down",
        marginBottom: "20px"
    }}/>;


    return <div 
    style={{
        display:"flex",
        flexDirection: "column",
        width: "100%",
    }}>
        {ad}
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
    </div>;
}