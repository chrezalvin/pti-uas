import {Link, Outlet, useLocation} from "react-router-dom";

interface IProps{
    // pages: string[];
    // gotoPage: (pageName: string) => void;
}

const pathMapping = [
    {   
        path: "/",
        name: "Home"
    },
    {   
        path: "/tutorial",
        name: "Tutorial"
    },
    {   
        path: "/about",
        name: "AboutUs"
    },

]

export default function Header(props: IProps){
    const location = useLocation();

    // remove navbar if game is running
    if(location.pathname === "/game")
        return (<Outlet />);

    const navUI = pathMapping.map(path => {
        return (
            <li className="nav-item">
                <Link 
                    to={path.path} 
                    className={`nav-link ${path.path === location.pathname ? "active": ""}`}
                >
                    {path.name}
                </Link>
            </li>
        )
    })

    return(
    <>
        <header className="container d-flex justify-content-center py-3 position-sticky">
            <ul className="nav nav-pills">
                {navUI}
            </ul>
        </header>
        <Outlet />
    </>
    )
}