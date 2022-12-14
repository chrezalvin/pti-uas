export function Home(){
    return(
        <>
        <main className="main d-flex flex-column justify-content-center">
            <div className="align-self-center d-flex flex-column gap-2">
                <h1 className="text-center my-4">1st Player</h1>
                <div className="">
                    <input 
                        type="text" 
                        name="playerName" 
                        className="input-group text-center" 
                        placeholder="Player Name" 
                    />
                </div>
                <div className="d-flex justify-content-evenly gap-1">
                    <button className="btn btn-primary">Add Player</button>
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