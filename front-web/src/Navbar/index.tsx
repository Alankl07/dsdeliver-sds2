import './styles.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className="main-Navbar" >
            <Logo/>
            <Link to="/" className="logo-text" >DS Delivery</Link>
        </nav>
    )
}

export default Navbar;