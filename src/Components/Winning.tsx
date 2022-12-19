import dog_awake from "../assets/avatars/dog-awake.jpg";
import { Link } from "react-router-dom";

interface IProps{
    player: string;
}

export default function Winning(props: IProps){
    return (
        <div className="position-absolute vw-100 vh-100 d-flex justify-content-center align-items-center" style={{zIndex: 999}}>
            <div className="bg-white text-center p-4 rounded-4 shadow-lg">
                <h1>{props.player} Woke up Spike!!</h1>
                <hr />
                <h3>Now Spike is Angry!</h3>
                <img src={dog_awake} className="img-fluid" style={{width: "30vw"}} alt="" />

                <hr />
                <div className="my-4 my-2 d-flex justify-content-evenly">
                    <Link to="/">
                        <button className="btn btn-warning">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}