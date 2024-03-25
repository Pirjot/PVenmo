import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/App";
import {VenmoApp} from "./components/VenmoApp"

const indexRoot = [document.getElementById("app"), <App name="Lavi" />];
const venmoRoot = [document.getElementById("venmo-app"), <VenmoApp />];

const roots = [indexRoot, venmoRoot];

// Render all possible apps

for (let lst of roots) {
    if (lst[0] != null) {
        const root = ReactDOM.createRoot(lst[0]);
        root.render(lst[1]);
    }
}
