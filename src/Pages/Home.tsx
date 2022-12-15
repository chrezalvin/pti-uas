import { ChangeEvent, MouseEvent, useState } from "react"

function firstSecond(num: number){
    if(num <= 0)
        throw new Error("num cannot be lower or equal to zero");

    switch(num){
        case 1: return "1st";
        case 2: return "2nd";
        case 3: return "3rd";
        default: return `${num}th`;
    }
}

export default function Home(){
    const [name, setName] = useState("");
    const [names, setNames] = useState<string[]>([]);

    function handleNameOnChange(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }

    function handleAddNameOnClick(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        setNames([...names, name]);
        setName("");
    }

    return(
        <>
        <main className="main d-flex flex-column justify-content-center">
            <div className="align-self-center d-flex flex-column gap-2">
                <h1 className="text-center my-4">{firstSecond(names.length + 1)} Player</h1>
                <div className="">
                    <input 
                        type="text" 
                        name="playerName" 
                        className="input-group text-center" 
                        placeholder="Player Name"
                        value={name}
                        onChange={handleNameOnChange}
                    />
                </div>
                <div className="d-flex justify-content-evenly gap-1">
                    <button 
                        className="btn btn-primary"
                        onClick={handleAddNameOnClick}    
                    >Add Player</button>
                    <button className="btn btn-primary">Play Game!</button>
                </div>
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th colSpan={2} className="text-center">Player List</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} className="text-center">No player</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        </>
    )
}