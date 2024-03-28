import React from "react";

export function PaymentPage(props: {
    children?: React.JSX.Element[],
    setCome: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const topHeight = "50px";
    const spacerHeight = "50px";

    return <div style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll"
    }}>
        <i
            style={{
                position: "fixed",
                top: "10px",
                left: "20px",
                zIndex: "2",
                fontSize: "20px",
                WebkitTextStroke: "2px",
                color: "#888c94"
            }}
            onClick={(evt) => props.setCome(false)}
            className="fa-solid fa-chevron-left hoverClick" />

        <div style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: topHeight,
            backgroundColor: "white",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center"
        }}>
            <p style={{
                position: "fixed",
                fontFamily: "Roboto",
                color: "#55585e",
                fontWeight: "600",
                margin: "0"
            }}>Payment details</p>
        </div>

        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
        }}>

            <div style={{ height: spacerHeight }}></div>

            <div
                style={{
                    width: "250px",
                    height: "150px",
                    padding: "30px 0px 10px 0px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <img
                    src={"../static/images/default_profile.png"}
                    style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "50%"
                    }} />
                <p style={{ margin: "5px", fontSize: "20px", fontFamily: "Athletics", fontWeight: "800" }}>Bruin Bhangra</p>
                <p style={{ margin: "0", fontFamily: "SctoGroteskA" }}>"Pirjot pre-sale"</p>
                <p style={{ margin: "5px", fontSize: "24px", fontFamily: "Athletics", color: "#c72830" }}>- $8</p>
            </div>

            <div style={{
                paddingLeft: "10px"
            }}>
                <p style={{ margin: "0", fontFamily: "Roboto", fontSize: "14px", color: "#2f3033", fontWeight: "400" }}>Social activity</p>
                <p style={{ marginTop: "10px", fontFamily: "Roboto", whiteSpace: "pre", fontSize: "14px", color: "#888c94", fontWeight: "600", display: "flex", alignItems: "center" }}>
                    <i style={{ fontSize: "18px" }} className="fa-solid fa-heart"></i>
                    <span> 0    </span>
                    <i style={{ fontSize: "18px" }} className="fa-solid fa-comment"></i>
                    {" 0  "}
                </p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Status</p>
                <p style={{ marginTop: "5px", fontFamily: "SctoGroteskA", fontWeight: "600" }}>Complete</p>

                <p style={{ margin: "25px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Payment method</p>
                <div style={{ margin: "0px 0px 0px 0px", display: "flex", gap: "10px", alignItems: "center" }}>
                    <img src={"../static/images/bank.png"} style={{ width: "40px" }}></img>
                    <div style = {{fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px"}}>
                        <p style={{margin: "0px", marginTop: "10px"}}>BANK OF AMERICA, N.A.</p>
                        <p style={{margin: "0"}}>Personal Checking</p>
                        <p style={{fontSize: "12px", marginTop: "5px", fontWeight: "400", WebkitTextStroke: "0px"}}>Bank •• 2498</p>
                    </div>
                </div>

                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Transaction details</p>
                <p style={{ margin: "10px 0px 0px 0px", display: "flex", alignItems: "center", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>January 18, 2024, 3:01 PM • <span className="private-icon" /></p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Paid to</p>
                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>@BruinBhangra</p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Type of transaction</p>
                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>Payments between friends</p>

                <p style={{ margin: "20px 0px 0px 0px", fontFamily: "SctoGroteskA", fontSize: "14px", fontWeight: "600" }}>Transaction ID</p>
                <p style={{ margin: "10px 0px 0px 0px", fontFamily: "Roboto", fontWeight: "400", WebkitTextStroke: ".3px" }}>9299488194949</p>

                <p style={{ margin: "20px 0px 0px 0px", color: "#0074de", fontFamily: "Roboto", fontWeight: "800" }}>Need help?</p>

                <div style={{
                    height: "75px"
                }}></div>
            </div>
        </div>
    </div>;

}