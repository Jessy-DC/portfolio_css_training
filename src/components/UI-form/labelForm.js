import React from "react";

export default function LabelForm(props) {
    return (
        <label for={props.for}>{props.children}</label>
    )
}