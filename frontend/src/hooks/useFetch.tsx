import { Component, useState, useEffect } from "react";

/**
 * 
 * NOTE: If any of deps are specially set to null, then we do not
 * fetch!
 * @param api 
 * @param body 
 * @param deps 
 * @returns 
 */
export function useFetch(api: string, body:RequestInit = undefined, deps: Component[] = []) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        for (let dep of deps) {
            if (dep === null) {
                return;
            }
        }
        setLoading(true);

        // TODO: Add an Abort controller to get rid of any fetches already in travel
        // Add an option for not json files
        fetch(api, body)
            .then(response => response.redirected ? response : response.json())
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