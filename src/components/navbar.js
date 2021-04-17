import React, {useState} from "react";
import ContainerItems from './containerItems'
import Image from "./image";
import Menu from '../ressources/menu.svg'
import Close from '../ressources/close.svg'

export default function Navbar() {
    const [classImg, setClassImg] = useState('logoMenuImg')
    const [classDiv, setClassDiv] = useState('contItems')
    const [imgSrc, setImgSrc] = useState(Menu)

    const handleClickImage = () => {
        if (classDiv !== 'contItems responsive') {
            setClassImg(classImg + ' imgResize')
            setClassDiv(classDiv + ' responsive')
            setImgSrc(Close);
        } else {
            setClassImg('logoMenuImg')
            setClassDiv('contItems')
            setImgSrc(Menu);
        }
    }

    const handleClickNavbarItem = () => {
        setClassImg('logoMenuImg')
        setClassDiv('contItems')
        setImgSrc(Menu);
    }

    return (
        <div className="navbar">
            <ContainerItems onItemClick={handleClickNavbarItem} classItems={classDiv} />
            <Image src={imgSrc} alt="logo menu" imgClass={classImg} imgClick={handleClickImage} />
        </div>
    )
}