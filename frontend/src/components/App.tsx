import React, { Component } from "react";
import { useState, useEffect } from "react";

export function useFetch(api: string, deps: Component[] = []) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false)
            });
    }, deps);

    return [data, loading, error];
};

export function App(props: {
    name: String
}) {
    // States
    const [count, setCount] = useState(0);
    const [data, loading, error] = useFetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const [name, setName] = useState("");

    // Effects
    useEffect(() => {
        console.log("HOOK!");
        setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        if (data !== null) {
            console.log("SET NAME!")
            setName(data.name);
        }
    }, [data]);

    console.log("RENDER!! ");

    return <div>
        <h1>Hello {props.name}! The count is {count}.</h1>
        <h1>{data ? `Hello ${name}` : "Hello waiting for data..."}</h1>
    </div>;
}

