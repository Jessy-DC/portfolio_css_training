import React from "react";

export default function InputForm(props) {
    return (
        <input
            className={props.class}
            type={props.typeInput}
            id={props.inputId}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}/>
    )
}