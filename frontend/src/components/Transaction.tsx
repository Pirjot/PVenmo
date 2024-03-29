import React from "react";
import { genIcon } from "../helpers/genIcon";
import { CONFIG } from "./Config";

export function Transaction(props : {
    children?: React.JSX.Element[],
    transaction: typeof CONFIG["transactions"][0],
    icon: React.JSX.Element
}) {
    const trans = props.transaction;

    let currency = trans["amount"] ? String(new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(trans["amount"]))) : "";

    return <div 
    style={{
        display:"flex",
        flexDirection: "row",
        width: "100%",
        gap: "10px"
    }}>
        {props.icon}

        <div
        style={{
            width:"100%",
            fontFamily: "SctoGroteskA"
        }}
        >
            <div>
                <p style={{
                    margin: "0",
                    paddingTop: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <span>
                        <span style={{fontWeight: trans["payer"] == "You" ? "400" : "600"}}>{trans["payer"]}</span>
                        {" paid "}
                        <span style={{fontWeight: "600"}}>{trans["name"]}</span>
                    </span>
                    {trans["amount"] ? <span style={{ fontFamily: "Athletics", color: "#c72830", padding: "5px 10px 0px 0px" }}>- {currency}</span> : <></>}
                </p>
                <p style={{
                    margin: "0",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "gray",
                    fontWeight: "600"
                }}>{trans["passedtime"]} <span className="friends-icon" /></p>
            </div>
            <p style={{margin: "10px 0px 20px 0px", fontSize: "18px"}}>{trans["description"]}</p>
            <div
            style = {{
                display: "flex",
                gap: "10px",
                marginBottom: "20px",
                paddingRight: "10px",
                alignItems: "end"
            }}
            >
                <i style={{color: "gray", marginRight: "30px"}} className="bi bi-heart" />
                <i style={{color: "gray"}} className="bi bi-chat-square" />
                <div style={{width: "100%", display: "flex", justifyContent: "right"}}><span className="threedot-icon" /></div>
            </div>

            <hr style={{opacity:"25%"}} />
        </div>
    </div>;
}