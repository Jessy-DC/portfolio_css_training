import React from "react";

export default function Navlink(props) {
    return (
        <a href={props.link} className={props.class}>{props.children}</a>
    )
}