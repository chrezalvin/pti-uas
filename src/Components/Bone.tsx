import bone from "../assets/icons/bone.svg";

import { MouseEvent, useState } from "react";

interface IProps{
    boneOnClick: () => void;
}

export default function Bone(props: IProps){
    const [show, setShow] = useState(true)
    
    function handleBoneOnClick(e: MouseEvent<HTMLImageElement>){
        if(show){
            setShow(false);
            props.boneOnClick();
        }
    }

    return(
        <img 
            src={bone} 
            className="bone" 
            alt="" 
            onClick={handleBoneOnClick}
            style={{opacity: show ? 1: 0}}
        />
    )
}