import React from "react";

import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { styled } from '@mui/material/styles';
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { Transactions } from "./Transactions";
import { Box, Unstable_Grid2 as Grid, Slide } from "@mui/material";

export function VenmoApp(props: {
    name: String
}) {
    // States
    const [come, setCome] = useState(false);

    function slide() {
        console.log("Hello World");
        setCome(!come);
    }

    let button = <button onClick={slide}>Hello</button>;

    let paymentPage = <div style={{
        height:"100%",
        zIndex:"40",
        width:"100%",
        backgroundColor: "aqua",
        // position: "fixed",
        // top: "0",
        // left: "0",
        // transition: "4sec"
    }}>{button}
    </div>;

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
        height: "500px"
    }}
    direction="left" in={come} mountOnEnter unmountOnExit>
        {paymentPage}
    </Slide>

    </>;
}

