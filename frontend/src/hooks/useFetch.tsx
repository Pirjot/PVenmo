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