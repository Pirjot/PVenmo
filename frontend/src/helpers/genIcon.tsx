import React from "react";

export function genIcon(props: {
    height: string,
    alias: string,
    name?: string
}) {
    return <div
    style = {{
        whiteSpace: "nowrap",
        height: props.height,
        width: "75px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "SctoGroteskA"
    }}
    >
        <div style = {{
            height: "50px",
            width: "50px",
            color: "#6b6e76",
            backgroundColor: "#f9f9fa",
            borderRadius: "50%",
            border: "1px solid #e2e2e2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <p style={{fontSize: "18px", margin: "0"}}>{props.alias}</p>
        </div>
        {props.name ?
            <p style={{maxWidth: "100%", fontSize: "14px", textOverflow: "ellipsis", overflowX: "clip", margin: "5px 0px 0px 0px"}}>{props.name}</p>
            : <></>
        }
    </div>;
} 