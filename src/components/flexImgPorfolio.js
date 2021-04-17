import React from "react";
import ImagePortfolio from "./imagePortfolio";
import imgP1 from '../ressources/portfolio/imgP1.jpg'
import imgP2 from '../ressources/portfolio/imgP2.jpg'
import imgP3 from '../ressources/portfolio/imgP3.jpg'
import imgP4 from '../ressources/portfolio/imgP4.jpg'
import imgP5 from '../ressources/portfolio/imgP5.jpg'
import imgP6 from '../ressources/portfolio/imgP6.jpg'
import imgP7 from '../ressources/portfolio/imgP7.jpg'
import imgP8 from '../ressources/portfolio/imgP8.jpg'
import imgP9 from '../ressources/portfolio/imgP9.jpg'

export default function FlexImgPorfolio() {
    return (
        <div className="flexImgPortfolio">
            <ImagePortfolio imgPath={imgP1} imgAlt="img nature 1" />
            <ImagePortfolio imgPath={imgP2} imgAlt="img nature 2" />
            <ImagePortfolio imgPath={imgP3} imgAlt="img nature 3" />
            <ImagePortfolio imgPath={imgP4} imgAlt="img nature 4" />
            <ImagePortfolio imgPath={imgP5} imgAlt="img nature 5" />
            <ImagePortfolio imgPath={imgP6} imgAlt="img nature 6" />
            <ImagePortfolio imgPath={imgP7} imgAlt="img nature 7" />
            <ImagePortfolio imgPath={imgP8} imgAlt="img nature 8" />
            <ImagePortfolio imgPath={imgP9} imgAlt="img nature 9" />
        </div>
    )
}