import './styles.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
const Navbar = () => {
    return(
        <nav className="main-Navbar" >
            <Logo/>
            <a href="Home" className="logo-text" >DS Delivery</a>
        </nav>
    )
}

export default Navbar;