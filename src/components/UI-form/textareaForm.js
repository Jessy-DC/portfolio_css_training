import React from "react";

export default function TextareaForm(props) {
    return (
        <textarea type="text" id={props.inputId} name={props.name} placeholder={props.placeholder}/>
    )
}