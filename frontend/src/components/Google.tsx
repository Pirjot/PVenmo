import React from "react";

export function Google_Button() {
    return [
        <div id="g_id_onload"
            data-client_id="768237565747-cd6lq6cs00poc06k8aghqafab6427mlv.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-login_uri="/google"
            data-auto_prompt="false">
        </div>,
        <div className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left">
        </div>
    ];
}