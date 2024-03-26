import React from "react";

export function PaymentPage(props : {
    children?: React.JSX.Element[]
}) {
    
    return <div style={{
        position: "fixed",
        height:"100%",
        zIndex:"40",
        width:"100%",
        backgroundColor: "aqua",
        padding: "10px"
    }}>
        <i 
        style = {{
            position: "fixed",
            top: "10px",
            left: "10px"
        }}
        className="fa-solid fa-chevron-left" />

        <h3 style={{
            textAlign: "center"
        }}>Payment Details</h3>

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
    </div>;

}