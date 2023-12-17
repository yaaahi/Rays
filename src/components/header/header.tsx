import "./headerstyle.css"
import { Link } from 'react-scroll'

export function Header(){


    return(
        <div className="header-container" >

            <ul>
                <li className="home"><Link to="home" smooth={true} offset={0} duration={500} >home</Link></li>
                <li className="about"><Link to="about" smooth={true} offset={-50} duration={500}>About</Link></li>
                <li className="service">
                <Link to="service" smooth={true} offset={-50} duration={500}>Service</Link>
                </li>
            </ul>

            <div className="language">
                Japanese
            </div>
        </div>
    )
}
