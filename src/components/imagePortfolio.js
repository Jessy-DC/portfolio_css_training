import React from "react";
import Image from "./image";

export default function ImagePortfolio(props) {
    return (
        <div className="imgPort">
            <Image src={props.imgPath} alt={props.imgAlt} />
        </div>
    )
}