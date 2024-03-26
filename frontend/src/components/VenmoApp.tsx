import React from "react";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { Transactions } from "./Transactions";
import { PaymentPage } from "./PaymentPage";
import { Slide } from "@mui/material";

export function VenmoApp(props: {
    name: String
}) {
    // States
    const [come, setCome] = useState(false);

    function slide() {
        console.log("Hello Worl");
        setCome(!come);
    }

    let button = <button onClick={slide}>Hello</button>;

    return <><div>
        <TopBar />
        <Transactions />
        {button}
        <BottomBar />
    </div>
    <Slide style={{
        position: "fixed",
        top: "0",
        left: "0",
    }}
    direction="left" in={come}>
        <div style ={{
            position: "fixed",
            height:"100%",
            zIndex:"40",
            width:"100%",
        }}><PaymentPage /></div>
    </Slide>

    </>;
}

