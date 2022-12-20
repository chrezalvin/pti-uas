import { useState } from "react";
import audio_off from "../assets/icons/audio-off.svg";
import audio_on from "../assets/icons/audio-on.svg";

interface IProps{
    playAudio: () => void;
    muteAudio: () => void;
}

export default function Audio(props: IProps){
    const [audio, setAudio] = useState(audio_off);

    async function toggle(){
        if(audio === audio_off){
            await props.playAudio()
            setAudio(audio_on)
        }
        else{
            await props.muteAudio()
            setAudio(audio_off)
        }
    }

    return (
        <div className={`${audio === audio_on ? "bg-success": "bg-warning"} p-2 rounded-circle`} style={{maxWidth:"3rem"}}>
            <img 
                src={audio} 
                className="img-fluid" 
                alt="" 
                onClick={() => toggle()}
                />
        </div>
    )
}