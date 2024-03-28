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
        setCome(!come);
    }

    let button = <button onClick={slide}>Hello</button>;

    let mainPage = <div style={{
        height:"100%",
        zIndex:"1",
        width:"100%",
        overflowX: "clip"
    }}>
        <TopBar />
        <Transactions />
        {button}
        <div style={{
            height: "200px"
        }}></div>
        <BottomBar />
    </div>;

    let paymentSlide = <Slide style={{
        position: "fixed",
        top: "0",
        left: "0",
    }}
    direction="left" in={come}>
        <div style ={{
            height:"100%",
            zIndex:"1",
            width:"100%",
            overflowX: "clip"
        }}><PaymentPage setCome={setCome} /></div>
    </Slide>;

    return <>
    {come ? <div></div> : mainPage}
    {paymentSlide}
    </>;
}

