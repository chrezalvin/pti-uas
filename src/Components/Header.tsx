interface IProps{
    pages: string[];
    gotoPage: (pageName: string) => void;
}

export default function header(props: IProps){
    return(
    <div className="container">
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
        </header>
    </div>
    )
}