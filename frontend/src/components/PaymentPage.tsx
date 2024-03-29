import React from "react";
import { CONFIG } from "./Config";
import { Image } from "./Image";


export function PaymentPage(props: {
    children?: React.JSX.Element[],
    setCome: React.Dispatch<React.SetStateAction<boolean>>,
    transaction: typeof CONFIG['transactions'][0],
    icon: React.JSX.Element
}) {
    const trans = props.transaction;
    const topHeight = "50px";
    const spacerHeight = "50px";

    return <div style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll"
    }}>
        <i
            style={{
                position: "fixed",
                top: "10px",
                left: "20px",
                zIndex: "2",
                fontSize: "20px",
                WebkitTextStroke: "2px",
                color: "#888c94"
            }}
            onClick={(evt) => props.setCome(false)}
            className="fa-solid fa-chevron-left hoverClick" />

        <div style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: topHeight,
            backgroundColor: "white",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center"
        }}>
            <p style={{
                position: "fixed",
                fontFamily: "Roboto",
                color: "#55585e",
                fontWeight: "600",
                margin: "0"
            }}>Payment details</p>
        </div>

        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
        }}>

            <div style={{ height: spacerHeight }}></div>

            <div
                style={{
                    width: "250px",
                    height: "150px",
                    padding: "30px 0px 10px 0px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {props.icon}
                <p style={{ margin: "5px", fontSize: "20px", fontFamily: "Athletics", fontWeight: "800" }}>{trans["name"]}</p>
                <p style={{ margin: "0", fontFamily: "SctoGroteskA" }}>"<span>{trans['description']}</span>"</p>
                {trans["amount"] ? <p style={{ margin: "5px", fontSize: "24px", fontFamily: "Athletics", color: "#c72830" }}>- ${trans["amount"]}</p> : <></>}
            </div>

            <div style={{
                paddingLeft: "10px"
            }}>
                <p style={{ margin: "0", fontFamily: "Roboto", fontSize: "14px", color: "#2f3033", fontWeight: "400" }}>Social activity</p>
                <p style={{ marginTop: "10px", fontFamily: "Roboto", whiteSpace: "pre", fontSize: "14px", color: "#888c94", fontWeight: "600", display: "flex", alignItems: "center" }}>
                    <i style={{ fontSize: "18px" }} className="fa-solid fa-heart"></i>
                    <span> 0    </span>
                    <i style={{ fontSize: "18px" }} className="fa-solid fa-comment"></i>
                    {" 0  "}
                </p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Status</p>
                <p style={{ marginTop: "5px", fontFamily: "SctoGroteskA", fontWeight: "600" }}>Complete</p>

                <p style={{ margin: "25px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Payment method</p>
                <div style={{ margin: "0px 0px 0px 0px", display: "flex", gap: "10px", alignItems: "center" }}>
                    <Image src={"../static/images/bank.png"} style={{ width: "40px" }} />
                    <div style = {{fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px"}}>
                        <p style={{margin: "0px", marginTop: "10px"}}>BANK OF AMERICA, N.A.</p>
                        <p style={{margin: "0"}}>Personal Checking</p>
                        <p style={{fontSize: "12px", marginTop: "5px", fontWeight: "400", WebkitTextStroke: "0px"}}>Bank •• {trans["banknumber"]}</p>
                    </div>
                </div>

                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Transaction details</p>
                <p style={{ margin: "10px 0px 0px 0px", display: "flex", alignItems: "center", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>{trans["date"] + " • "}<span className="private-icon" /></p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Paid to</p>
                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>{trans["tag"]}</p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Type of transaction</p>
                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>{trans["type"]}</p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Transaction ID</p>
                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>{trans["transactionid"]}</p>

                <p style={{ margin: "20px 0px 0px 0px", color: "#0074de", fontFamily: "Roboto", fontWeight: "800" }}>Need help?</p>

                <div style={{
                    height: "75px"
                }}></div>
            </div>
        </div>
    </div>;

}