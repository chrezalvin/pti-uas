import notfoundAvatar from "../assets/avatars/not-found.jpg";

export default function NotFound(){
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <img src={notfoundAvatar} className="img-fluid" style={{width: "10rem"}}/>
            <div className="text-center">
                <h1>404</h1>
                <h2>Page Not Found!</h2>
            </div>
        </div>
    )
}