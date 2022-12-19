import gameplay from "../assets/tutorialImages/gameplay.png";
import loseScreen from "../assets/tutorialImages/spike-wakeup.png";

export default function Tutorial(){
    return (
        <>
        <div className="d-flex justify-content-center">
            <h1 className="title-border">Tutorial</h1>
        </div>
        <div className="d-flex justify-content-center">
            <div className="mx-4 text-center w-50">
                <img src={gameplay} className="img-fluid" alt="" />
                <p>Ambil tulang spike dan jangan biarkan spike bangun!</p>
                <p>Setiap kali tulang diambil, terdapat kemungkinan spike akan bangun</p>

                <img src={loseScreen} className="img-fluid w-50" alt="" />
                <p>Orang yang membangunkan spike kalah</p>
            </div>
        </div>
    </>
    )
}