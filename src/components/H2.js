import React from "react";

export default function H2(props) {
    return (
        <h2 className={props.class ? props.class : ""}>{props.children}</h2>
    )
}