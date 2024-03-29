import React, { useEffect } from "react";

import { useState, useCallback } from "react";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { Transactions } from "./Transactions";
import { PaymentPage } from "./PaymentPage";
import { Slide } from "@mui/material";
import { CONFIG } from "./Config";
import { useFetch } from "../hooks/useFetch";
import { genIcon } from "../helpers/genIcon";

export function VenmoApp(props: {}) {
    // States
    const [slide, setSlide] = useState(false);
    const [config, setConfig] = useState(CONFIG);
    const [selected, setSelected] = useState(0);
    const [icons, setIcons] = useState([]);
    const [topIcons, setTopIcons] = useState([]);
    const [configdata, loading, err] = useFetch("/getconfig");

    const populateDefaultIcons = (objects: {
        alias: string,
        name?: string
    }[], showNames: boolean, setArray: React.Dispatch<React.SetStateAction<any[]>>) => {
        // Populate the config with icon keys for all aliases provided
        let icons: React.JSX.Element[] = [];
        for (const obj of objects) {
            icons.push(genIcon({
                height: "50px", 
                alias: obj['alias'],
                name: showNames ? obj['name'] : undefined
            }));
        }
        setArray(icons);
    }

    /**
     * Build and return all icons with or without names
     * provided to display.
     * 
     * Does so by iterating through all objects and fetching
     * images immediately that are needed then mapping them
     * back to their original objects to create the icon
     * elements.
     */
    const populateImageIcons = async (objects: {
        image?: string,
        alias: string,
        name?: string,
        useimage: string
    }[], showNames: boolean, setArray: React.Dispatch<React.SetStateAction<any[]>>) => {
        let icons: React.JSX.Element[] = [];
        let promises: [Promise<any>, string][] = [];
        let files: string[] = [];
        let imageToURL: Record<string, string> = {}

        for (const obj of objects) {
            if (obj['useimage'] == '1') {
                if (!(obj['image'] in files)) {
                    const formData = new FormData();
                    formData.append('filename', obj['image']);
                    let request = fetch('/download', {
                        method: 'POST',
                        body: formData,
                    });
                    promises.push([request, obj['image']]);
                    files.push(obj['image']);
                }
            }
        }
        let img = "";
        const responses = await Promise.allSettled(promises.map((i) => i[0]));
        const nameToResponse: Record<string, any> = {};

        for (let i = 0; i < promises.length; i++) {
            nameToResponse[promises[i][1]] = responses[i].status == "fulfilled" ? 
            (responses[i] as any).value : "";
        }

        for (const obj of objects) {
            let img = "";
            if (obj['useimage'] == '1' && obj['image'] in nameToResponse) {
                const response = nameToResponse[obj['image']];
                let blob = await response.blob();
                img = URL.createObjectURL(blob);
            }

            icons.push(genIcon({
                height: "50px",
                name: showNames ? obj['name'] : undefined,
                alias: obj['alias'],
                img: img
            }));
        }

        setArray(icons);
    };

    useEffect(() => {
        if (!loading && !err) {
            setConfig(configdata);
        }
    }, [loading]);

    useEffect(() => {
        populateDefaultIcons(config['transactions'], false, setIcons);
        populateDefaultIcons(config['topIcons'], true, setTopIcons);
        populateImageIcons(config['transactions'], false, setIcons);
        populateImageIcons(config["topIcons"], true, setTopIcons);
    }, [config]);

    let mainPage = <div style={{
        height:"100%",
        zIndex:"1",
        width:"100%",
        overflowX: "clip"
    }}>
        <TopBar topIcons={topIcons}/>
        <Transactions transactions={config['transactions']} icons={icons} setSelected={setSelected} setSlide={setSlide}/>
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
    direction="left" in={slide}>
        <div style ={{
            height:"100%",
            zIndex:"1",
            width:"100%",
            overflowX: "clip",
            backgroundColor:"white"
        }}><PaymentPage setCome={setSlide} transaction={config['transactions'][selected]} icon={icons[selected]}/></div>
    </Slide>;

    return <>
    {slide ? <div></div> : mainPage}
    {paymentSlide}
    </>;
}

