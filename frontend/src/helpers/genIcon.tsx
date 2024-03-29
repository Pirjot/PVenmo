import React from "react";
import { Image } from "../components/Image";

export function genIcon(props: {
    height: string,
    alias: string,
    name?: string,
    img?: string
}) {
    const aliasCircle = <div style = {{
        height: props.height,
        minHeight: props.height,
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
    </div>;

    const imgCircle = <Image
        src={props.img}
        style={{
            width: "51.6px",
            height: "51.6px",
            objectFit: "cover",
            borderRadius: "50%",
    }} />;

    return <div
    style = {{
        whiteSpace: "nowrap",
        minHeight: props.height,
        height: props.height,
        width: "65px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "SctoGroteskA"
    }}
    >
        {props.img ? imgCircle : aliasCircle}
        {props.name ?
            <p style={{maxWidth: "100%", fontSize: "14px", textOverflow: "ellipsis", overflowX: "clip", margin: "5px 0px 0px 0px"}}>{props.name}</p>
            : <></>
        }
    </div>;
} 