import React from "react";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";


export function App(props: {
    name: String
}) {
    // States
    const [count, setCount] = useState(0);
    const [data, loading, error] = useFetch("https://fakesite1293949.com");
    const [name, setName] = useState("");

    // Effects
    useEffect(() => {
        console.log("HOOK!");
        setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        if (loading == false) {
            if (error !== null) {
                console.log("Encountered Error");
                console.error(error);
            } else {
                console.log("SET NAME!")
                setName(data.name);
            }
        }
    }, [loading]);

    console.log("RENDER!! ");

    return <div>
        <h1>Hello {props.name}! The count is {count}.</h1>
        <h1>{data ? `Hello ${name}` : "Hello waiting for data..."}</h1>
    </div>;
}

