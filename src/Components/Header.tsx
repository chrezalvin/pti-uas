import {Link, Outlet} from "react-router-dom";

interface IProps{
    // pages: string[];
    // gotoPage: (pageName: string) => void;
}

export default function header(props: IProps){
    return(
    <>
        <header className="container d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">FAQ</Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
        </header>
        <Outlet />
    </>
    )
}