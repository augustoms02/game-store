import {Link} from 'react-router-dom';
import Busca from "./Busca";
import './NavBar.css'


export default function NavBar({data}) {
    return (
        <nav className='navbar'>
            <Busca data={data}/>
            <ul className='nav_links'>
                <li><Link to="/"  className='nav_link'>HOME</Link></li>
                <li><Link to="/PC%20(Windows)" className='nav_link'>PC</Link></li>
                <li><Link to="/Web%20Browser"  className='nav_link'>BROWSER</Link></li>
            </ul>
        </nav>
    ) 
}