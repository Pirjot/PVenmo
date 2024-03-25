import React from "react";
import { Transaction } from "./Transaction";

export function Transactions(props : {
    children?: React.JSX.Element[]
}) {
    return <div 
    style={{
        display:"flex",
        flexDirection: "column",
        border: "3px solid pink",
        width: "100%",
    }}>
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