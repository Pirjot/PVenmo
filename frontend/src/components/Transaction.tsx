import React from "react";

export function Transaction(props : {
    children?: React.JSX.Element[]
}) {

    let topPortion = <div 
    style={{
        display:"flex",
        flexDirection: "row",
        border: "3px solid black",
        width: "100%",
    }}>
        <div
        style = {{
            height: "50px",
            width: "50px",
            margin: "10px",
            backgroundColor: "gray"
        }}
        />

        <div
        style={{
            width:"100%"
        }}
        >
            <div>
                <p style={{
                    marginBottom: "0"
                }}>Somebody paid Somebody</p>
                <p style={{
                    marginTop: "0"
                }}>49m <i style={{color: "gray"}} className="fa-solid fa-user-group"></i></p>
            </div>
            <p>Description</p>
            <div
            style = {{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                marginBottom: "20px"
            }}
            >
                <i className="bi bi-heart" />
                <i className="bi bi-chat-square" />
                <i className="bi bi-three-dots"></i>
            </div>
        </div>
    </div>;

    
    return <>{...[topPortion]}</>;
}