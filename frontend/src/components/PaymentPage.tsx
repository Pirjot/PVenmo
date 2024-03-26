import React from "react";

export function PaymentPage(props : {
    children?: React.JSX.Element[],
    setCome: React.Dispatch<React.SetStateAction<boolean>>
}) {
    
    return <div style={{
        height:"100%",
        width:"100%",
        backgroundColor: "aqua",
        overflowY: "scroll"
    }}>
        <i 
        style = {{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: "3"
        }}
        onClick={(evt) => props.setCome(false)}
        className="fa-solid fa-chevron-left hoverClick" />

        <div style ={{
            position: "sticky",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "50px",
            backgroundColor: "white",
            paddingTop: "20px",
            zIndex: "2"
        }}>
            <p style ={{
                textAlign: "center"
            }}>Payment Details</p>
        </div>

        <div
        style={{
            width: "200px",
            height: "200px",
            backgroundColor: "purple",
            margin: "auto"
        }}
        >Contents</div>

        <p>Social Activity</p>
        <p>Icons</p>

        <p style={{marginBottom: "0"}}>Status</p>
        <p style={{marginTop: "0"}}>Complete</p>

        <p>Payment Method</p>
        <div>Payment Box</div>

        <p>Transaction Details</p>
        <p>Date</p>

        <p>Paid to</p>
        <p>PersonPaid</p>

        <p>Type of Transaction</p>
        <p>Payments between friends</p>

        <p>Transaction ID</p>
        <p>9299488194949</p>
        
        <p>Need Help?</p>

        <div style={{
            height: "200px"
        }}></div>
    </div>;

}