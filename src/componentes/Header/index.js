import { Link } from "react-router-dom";
import "./header.css";


function Header(){
    return(
       <div className="navbar navbar-expand-lg navbar-dark bg-dark" id="menu">
            <a href="#" className="navbar-brand">
                <h4>MindAdvice</h4>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarnav">
                <ul className="navbar-nav">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </div>
       </div>
    )
}

export default Header;