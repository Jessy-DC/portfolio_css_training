import React from "react";
import Image from "./image";
import imgNature from '../ressources/imgNature.jpg'

export default function ContainerImageSection1() {
    return (
        <div className="contImgSec1">
            <Image src={imgNature} alt="img nature" />
        </div>

    )
}