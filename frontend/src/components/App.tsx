import React from "react";

import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import {Google_Button} from "./Google";

export function App(props: {
    name: String
}) {
    // States
    const [count, setCount] = useState(0);

    return <div>
        <h1>Hello {props.name}! The count is {count}.</h1>
        <Google_Button />
    </div>;
}

