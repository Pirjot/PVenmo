import { Component, useState, useEffect } from "react";

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

/**
 * 
 * EXAMPLE
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
 */