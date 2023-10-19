import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <div className="container">
        <nav>
            <div className="logo">
                <span>SCHOOL</span>
            </div>
            <ul>
                <Link to ="/" className='nav-item'>
                    <li>Home</li>
                </Link>
                <Link to ="/about" className='nav-item'>
                    <li>About</li>
                </Link>
            </ul>

                <Link to="/dashboard" className="nav-btn">Dashboard</Link>

        </nav>
    </div>
    )
    
}