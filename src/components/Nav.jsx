import WorldIcon from "../images/world.png";

export default function Nav(){
    return(
        <div className="navbar-style">
            <img className="world-icon-style" src={WorldIcon} />
            <p>my travel journal</p>
        </div>
    )
}