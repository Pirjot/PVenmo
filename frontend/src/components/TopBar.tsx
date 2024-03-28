import React from "react";

import { genIcon } from "../helpers/genIcon";

export function TopBar(props : {
    children?: React.JSX.Element[]
}) {
    let height = "100px";

    const imageurls = [["../static/images/search.png", "Search"], ["../static/images/scan.png", "Scan"]];

    const icons = [];

    for (let urlList of imageurls) {
        const url = urlList[0];
        const name = urlList[1];

        icons.push(<div
            style = {{
                whiteSpace: "nowrap",
                height: height,
                width: "75px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "SctoGroteskA"
            }}
            >
                <img
                    src={url}
                    style={{height: "50px", width: "50px"}}
                />
                <p style={{maxWidth: "100%", textOverflow: "ellipsis", overflowX: "clip", margin: "5px 0px 0px 0px", fontSize: "14px"}}>{name}</p>
            </div>);
    }

    let item = genIcon({height, alias: "NF", name: "Nathaniel Fish"});

    return <div
    className="container"
    style={{
        position: "sticky",
        display: "flex",
        padding: "0px 0px 10px 10px",
        gap: "10px",
        height: height,
        alignItems: "center",
        width: "100%",
        overflowX: "scroll",
        top: "0",
        backgroundColor: "white",
    }}
    >
        {...icons}
        {...[item, item, item, item, item]}
    </div>;
}