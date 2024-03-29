import React from "react";

export function BottomBar(props : {
    children?: React.JSX.Element[]
}) {

    let height = "100px";

    let item = <div
    style = {{
        whiteSpace: "nowrap",
        height: height,
        minWidth: "2000px",
        border: "3px solid black"
    }}
    >
        500
    </div>

    return <div
    className="container"
    style={{
        position: "fixed",
        display: "flex",
        padding: "0px",
        height: height,
        border: "3px solid black",
        alignItems: "center",
        width: "100%",
        gridGap: "20px",
        overflowX: "scroll",
        bottom: "0",
        backgroundColor: "white"
    }}
    >
        {...(props.children || [])}
        {item}
    </div>;
}