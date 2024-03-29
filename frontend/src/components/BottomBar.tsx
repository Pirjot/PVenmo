import React from "react";
import {Image} from "./Image";

export function BottomBar(props : {
    children?: React.JSX.Element[]
}) {

    return <Image
    src={"../static/images/bottom.png"}
    style={{
        position: "fixed",
        width: "100%",
        bottom: "0",
        left: "0",
        objectFit: "scale-down",
        filter: "drop-shadow(0px 0px 5px gray)"
    }}
    />;
}