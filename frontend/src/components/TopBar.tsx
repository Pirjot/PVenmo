import React from "react";

import { genIcon } from "../helpers/genIcon";
import { Modal } from "@mui/material";
import { Config, FileButton, GetFileButton, CONFIG } from "./Config";
import { Image } from "./Image";

export function TopBar(props : {
    children?: React.JSX.Element[],
    topIcons: React.JSX.Element[];
}) {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    let modal = <Modal
        open={open}
        onClose={handleClose}
    >
        <div
            style={{
                position: "fixed",
                height: "50%",
                width: "100%",
                marginTop: "25%",
                backgroundColor: "white",
                overflowY: "scroll"
            }}
        >
            <h2 style={{textAlign: "center"}}>PVenmo Config</h2>
            <h3>Upload Image Files</h3>
            <FileButton />

            <h3>View Images</h3>
            <GetFileButton />

            <h3>Update Config</h3>
            <Config />
        </div>
    </Modal>;
    
    
    
    let height = "100px";

    const imageurls = [["../static/images/search.png", "Search"], ["../static/images/scan.png", "Scan"]];

    const icons = [];

    for (let urlList of imageurls) {
        const url = urlList[0];
        const name = urlList[1];

        icons.push(<div
            style = {{
                whiteSpace: "nowrap",
                height: height,
                width: "65px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "SctoGroteskA"
            }}
            >
                <Image
                    src={url}
                    style={{height: "50px", width: "50px"}}
                    onClick={name == "Scan" ? handleOpen : undefined}
                />
                <p style={{maxWidth: "100%", textOverflow: "ellipsis", overflowX: "clip", margin: "5px 0px 0px 0px", fontSize: "14px"}}>{name}</p>
            </div>);
    }

    // let items: React.JSX.Element[] = [];

    // for (const item of props.topIcons){
    //     items.push(genIcon({height, alias: item['alias'], name: item['name']}))
    // }

    return <div
    className="container"
    style={{
        position: "sticky",
        display: "flex",
        padding: "0px 0px 10px 10px",
        gap: "10px",
        height: height,
        alignItems: "center",
        width: "100%",
        overflowX: "scroll",
        top: "0",
        backgroundColor: "white",
        zIndex: "2"
    }}
    >
        {...icons}
        {modal}
        {...props.topIcons}
    </div>;
}