import { ChangeEvent, MouseEvent, useState, KeyboardEvent } from "react"
import { Link } from "react-router-dom";

const MAX_PLAYER = 4;
const MAX_NAME_LENGTH = 10;

function firstSecond(num: number){
    if(num <= 0)
        throw new Error("num cannot be lower or equal to zero");
    else if (num > MAX_PLAYER)
        return "Max";

    switch(num){
        case 1: return "1st";
        case 2: return "2nd";
        case 3: return "3rd";
        default: return `${num}th`;
    }
}

interface IProps{
    names: string[];
    setNewName: (pname: string) => void;
    deleteName: (pname: string) => void;
}

export default function Home(props: IProps){
    const [name, setName] = useState("");

    function addNewName(pname: string){
        if(props.names.length >= MAX_PLAYER) return;
        if(pname === "" || props.names.find(name => pname === name))
            return;
        props.setNewName(pname);
        setName("");
    }

    function handleNameOnChange(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value.length >= MAX_NAME_LENGTH) return;
        setName(e.target.value);
    }

    function handleAddNameOnClick(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        addNewName(name);
    }

    function handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter")
            addNewName(name);
    }

    function handleChangeRouteOnClick(e: MouseEvent<HTMLAnchorElement>){
        if(props.names.length === 0) 
            e.preventDefault()
    }

    let playerNameUI: JSX.Element | JSX.Element[] = (
        <tr>
            <td colSpan={2} className="text-center">No player</td>
        </tr>);

    if(props.names.length !== 0)
        playerNameUI = props.names.map(name => {
            return (
                <tr>
                    <td colSpan={3} className="text-center">{name}</td>
                    <td colSpan={1} className="d-flex justify-content-end">
                        <button 
                            className="btn btn-danger"
                            onClick={() => {props.deleteName(name)}}
                        >Delete</button>    
                    </td>
                </tr>
            )
        })


    return(
        <>
        <main className="main d-flex flex-column justify-content-center">
            <h1 className="text-center">Don't Take Spike's Bones!!</h1>
            <div className="align-self-center d-flex flex-column gap-2">
                <h2 className="text-center my-4">{firstSecond(props.names.length + 1)} Player</h2>
                <div className="">
                    <input 
                        type="text" 
                        name="playerName" 
                        className="input-group text-center" 
                        placeholder={`${firstSecond(props.names.length + 1)} Player Name`}
                        value={name}
                        onChange={handleNameOnChange}
                        onKeyDown={handleOnKeyDown}
                        disabled={props.names.length >= MAX_PLAYER}
                        />
                </div>
                <div className="d-flex justify-content-evenly gap-1">
                    <button 
                        className="btn btn-primary"
                        onClick={handleAddNameOnClick}
                        disabled={props.names.length >= MAX_PLAYER}
                    >Add Player</button>
                    <Link to={"/game"} onClick={handleChangeRouteOnClick}>
                        <button 
                            className="btn btn-primary"
                            disabled={props.names.length === 0}
                            >Play Game!</button>
                    </Link>
                </div>
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th colSpan={4} className="text-center">Player List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerNameUI}
                    </tbody>
                </table>
            </div>
        </main>
        </>
    )
}