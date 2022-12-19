import Team, {ITeam} from "../Components/Team";
import DATA_TEAM from "../assets/teams";
import defaultAvatar from "../assets/avatars/default-avatar.jpg";
import "./AboutUs.css";


export interface IProps{
    teams: ITeam[];    
}

export default function AboutUs(){
    const teamUI = DATA_TEAM.map((team, idx) => {
        return (
            <div className="col-12">
                <Team 
                    name={team.name} 
                    nim={team.nim} 
                    taskList={team.daftarTugas}
                    avatar={team.avatar ? team.avatar : defaultAvatar}
                    key={`team-${idx}`}
                />
            </div>
        )
    })
    
    return(
        <>
            {/* <Header gotoPage={(a) => {}} pages={[]}/> */}
            <div className="d-flex justify-content-center">
                <h1 className="title-border">About Us</h1>
            </div>
            <div className="container gap-4">
                <div className="row g-3">
                    {teamUI}
                </div>
            </div>
        </>
    )
}