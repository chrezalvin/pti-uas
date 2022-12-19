import axios from "axios";
import useSound from "use-sound";
import {type OpenWeather} from "../assets/OpenWeather"
import {Link} from "react-router-dom";

import sunny from "../assets/backgrounds/sunny.jpg";
import afternoon from "../assets/backgrounds/afternoon.webp";
import night from "../assets/backgrounds/night.jpg";
import rainy from "../assets/backgrounds/rainy.jpg";
import rainyNight from "../assets/backgrounds/rainy night.jpg";
import bone from "../assets/icons/bone.svg";

import dog_sleep from "../assets/avatars/dog-sleep.gif";
import dog_awake from "../assets/avatars/dog-awake.jpg";


import night_audio from "../assets/audio/night.mp3";
import day_audio from "../assets/audio/amb_brekkie_chicory.ogg";

import Chronos from "../Components/Chronos";
import Background from "../Components/Background";
import Audio from "../Components/Audio";
import Bone from "../Components/Bone";
import Winning from "../Components/Winning";
import { useEffect, useState } from "react";

import config from "../assets/config.json";
import "./Game.css";

function judgeDay(){
    const hours = new Date().getHours();
    if(hours < 5) return "night";
    if(hours < 14) return "day";
    if(hours < 17) return "afternoon";
    else return "night";
}

async function getWeatherData() {
    return await axios<OpenWeather>(`${config.base_OpenWeather}?lat=${config.UMN.lat}&lon=${config.UMN.lon}&appid=${config.API_KEY}`);
}

async function getBackgroundBasedOnTimeAndWeather(){
    const data = await getWeatherData();
    console.log(data);
    const weather = data.data.weather[0].main;
    switch(judgeDay()){
        case "day":
        if(weather === "rain") return rainy; return sunny;
        case "afternoon":       
        if(weather === "rain") return rainy; return afternoon;
        case 'night':
        if(weather === "rain") return rainyNight; return night;
        default: return sunny;
    }
}

function getAudioFromDay(){
    const getTime = judgeDay();
    switch(getTime){
        case "day":
        case "afternoon": return day_audio;
        case "night": return night_audio;
        default: return day_audio;
    }
}

const BONE_MAPPING = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]

interface IProps{
    players: string[];
}

let timer = 100;

export default function Game(props: IProps){
    const [play, {pause}] = useSound(getAudioFromDay());
    const [background, setBg] = useState(sunny);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [timer, setTimer] = useState(100);
    const [isLose, setisLose] = useState(false);

    useEffect(() => {
        async function main(){
            const bg = await getBackgroundBasedOnTimeAndWeather()
            // const bg = sunny
            setBg(bg);
        }
        
        main();
        setInterval(() => {
            setTimer(timer - 1)
        }, 1000);
    }, [])

    function nextPlayer(){
        if(props.players.length <= currentPlayerIndex + 1)
            setCurrentPlayerIndex(0);
        else setCurrentPlayerIndex(currentPlayerIndex + 1);
    }

    function playAudio() {
        play();
    }

    function muteAudio() {
        pause();
    }

    function handlBoneOnClick(){
        if(Math.random() * 100 <= 5){
            setisLose(true);
            return;
        }

        nextPlayer();
    }

    const gameUI = BONE_MAPPING.map(row => {
        const BONE_COUNT = props.players.length >= 2 ? 9 : 4;

        return row.map(bone_map => {
            if(bone_map)
            return (
                <div className={`grid${BONE_COUNT > 4 ? "3x3": "2x2"}`}>
                    {Array(BONE_COUNT).fill(
                        <div 
                            className="bone-container d-flex justify-content-center align-self-center"
                        >
                            <Bone boneOnClick={handlBoneOnClick}/>
                        </div>)}
                </div>
            )
            else
                return (
                <div className="d-flex justify-content-center align-self-center">
                    <img src={dog_sleep} style={{height: "150px"}} />
                </div>
                )
        })
    })
    
    return(
        <>
            {isLose ? <Winning player={props.players[currentPlayerIndex]}/>: null}
            <Background url={background} />
            <div className="position-absolute m-3">
                <Link to={"/"}>
                    <button className="btn btn-success fw-bold px-4 py-1">BACK</button>
                </Link>
            </div>
            <div className="position-absolute m-3 end-0">
                <Audio playAudio={playAudio} muteAudio={muteAudio}/>
            </div>
            <div className="position-absolute bottom-0 p-2">
                <h1>
                    <Chronos className="fw-bolder"/>
                </h1>
            </div>
            <div className="position-absolute bottom-0 end-0 p-2">
                <h1>
                    {timer}
                </h1>
            </div>

            <div className="vw-100 vh-100 d-flex align-items-center flex-column">
                <div className="text-center m-2">
                    <h2 className="m-0 p-0">{props.players[currentPlayerIndex]}'s turn {isLose ? "Lose": ""}</h2>
                </div>

                <div className="cust-grid my-border bg-white rounded-4" style={{opacity: 0.8}}>
                    {gameUI}
                </div>
            </div>
        </>
        
        )
    }