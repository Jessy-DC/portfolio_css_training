import React from "react";
import Navlink from './navlink'

export default function ContainerItems(props) {
    return (
        <div className={props.classItems}>
            <Navlink onClick={props.onItemClick} link="#home" class="items">Home</Navlink>
            <Navlink onClick={props.onItemClick} link="#about" class="items">About</Navlink>
            <Navlink onClick={props.onItemClick} link="#creations" class="items">Creations</Navlink>
            <Navlink onClick={props.onItemClick} link="#contact" class="items">Contact</Navlink>
        </div>
    )
}