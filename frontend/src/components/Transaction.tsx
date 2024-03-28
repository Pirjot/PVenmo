import React from "react";
import { genIcon } from "../helpers/genIcon";

export function Transaction(props : {
    children?: React.JSX.Element[]
}) {

    let icon = genIcon({
        height: "50px",
        alias: "KG"
    });

    return <div 
    style={{
        display:"flex",
        flexDirection: "row",
        width: "100%",
        gap: "10px"
    }}>
        {icon}

        <div
        style={{
            width:"100%",
            fontFamily: "SctoGroteskA"
        }}
        >
            <div>
                <p style={{
                    margin: "0",
                    marginTop: "5px"
                }}><span style={{fontWeight: "600"}}>Matthew Espinoza</span> paid <span style={{fontWeight: "600"}}>Joy del Rosario</span></p>
                <p style={{
                    margin: "0",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "gray",
                    fontWeight: "600"
                }}>2d <span className="friends-icon" /></p>
            </div>
            <p style={{margin: "10px 0px 20px 0px"}}>Description</p>
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

            <hr style={{opacity:"50%"}} />
        </div>
    </div>;
}