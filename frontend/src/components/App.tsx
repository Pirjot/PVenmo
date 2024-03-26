import React from "react";

import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import {Google_Button} from "./Google";
import { TextField, Button } from "@mui/material";

export function App(props: {
    name: String
}) {
    // States
    const [input, setInput] = useState("");
    const [loginBody, setLoginBody] = useState(null);

    let [response, load, err]: any[] = useFetch("/login", {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginBody),
        redirect: "follow"
    }, [loginBody]);

    // Hooks
    useEffect(() => {
        if (response === null) {
            return;
        }
        window.location = response.url;
    }, [response]);

    function loginButton() {
        if (input.length == 0) {
            alert("Ensure to input something!");
        } else {
            // Make fetch
            setLoginBody({"credential": input});
        }
    }

    return <div>
        <h1>Hello!</h1>
        <Google_Button />
        <h1>Currently the above is not working with Replit custom domains.</h1>
        <h1>Just use a custom password (make it simple like your name, there is no hashing done here) to identify yourselves while this app is still in local</h1>
        <TextField value={input} onChange={(evt) => setInput(evt.target.value)} id="outlined-basic" label="Login" variant="outlined" type="password" />
        <Button onClick={loginButton}>Login</Button>
    </div>;
}

