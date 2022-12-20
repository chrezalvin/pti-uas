export interface ITeam{
    name: string;
    nim: string;
    taskList: string[];
    avatar?: string;
}

export default function Team(props: ITeam){
    return(
        <div className="row shadow">
            <div className="col-3 d-flex align-self-center">
                <img 
                    src={props.avatar ? props.avatar: "./default-avatar.jpg"} 
                    className="rounded-circle img-fluid" 
                    alt={`${props.name}'s avatar`}
                />
            </div>
            <div className="col">
                <h2>{props.name}</h2>
                <h4>{props.nim}</h4>
                <div className="">
                    <h4>Daftar Tugas</h4>
                    <ul className="tugas">
                        {props.taskList.length === 0 ? <li>Tidak Ada</li> : props.taskList.map(task => <li>{task}</li>)}
                    </ul>
                </div>
            </div>
        </div>
        )
    }