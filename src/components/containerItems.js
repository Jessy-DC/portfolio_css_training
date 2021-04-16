import React from "react";
import Navlink from './navlink'

export default function ContainerItems() {
    return (
        <div className="contItems">
            <Navlink link="#home" class="items">Home</Navlink>
            <Navlink link="#about" class="items">About</Navlink>
            <Navlink link="#creations" class="items">Creations</Navlink>
            <Navlink link="#contact" class="items">Contact</Navlink>
        </div>
    )
}