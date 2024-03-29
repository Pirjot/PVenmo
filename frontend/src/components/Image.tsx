import React from "react";

export const Image = React.memo(function Image(props: { src: string, style?: React.CSSProperties, onClick?: React.MouseEventHandler<HTMLImageElement> }) {
    return <img src={props.src} style={props.style} onClick={props.onClick} />;
});