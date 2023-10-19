import { Link } from "react-router-dom";

export default function TopBar(){
    return(
            <div className="top-bar d-flex container">
                <h1>Dashboard</h1>
                <Link to='/' className="nav-btn">Go to website</Link>
            </div>
    )
}