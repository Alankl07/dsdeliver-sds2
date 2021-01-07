import './styles.css';
import { ReactComponent as InstagramIcon } from '../assets/Instagram.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
const Footer = () => {
    return(
       <footer className="main-footer" >
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons" >
            <a href="https://www.linkedin.com/in/alan-nunes-b884b8199/">
                <LinkedinIcon/>
            </a>
            <a href="https://www.instagram.com/_alankl07/">
                <InstagramIcon/>
            </a>
        </div>
       </footer>
    )
}

export default Footer;