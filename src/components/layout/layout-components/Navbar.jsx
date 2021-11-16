import '../layout-components/Layout.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" >Home</NavLink></li>
                <li><NavLink exact to="/calderas" >Calderas</NavLink></li>
                {/* <li><a>Técnicos</a></li>
                <li><a>Clientes</a></li> */}
            </ul>
        </nav>
    )
}
export default Navbar
