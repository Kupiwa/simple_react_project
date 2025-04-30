import "./components-styling/Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Main() {

    return (
        <div className="main">

            <h2 className="name-glow">Kupiwa Nangati</h2>

            <p>
                Hi there! I am software developer.
            </p>
            <h3>Technology Stack:</h3>
            <ul>
                <li><FontAwesomeIcon icon={faHtml5} className="icon" /></li>
                <li><FontAwesomeIcon icon={faCss3} className="icon" /></li>
                <li><FontAwesomeIcon icon={faJs} className="icon" /></li>
                <li><FontAwesomeIcon icon={faNodeJs} className="icon" /></li>
                <li><FontAwesomeIcon icon={faReact} className="icon" /></li>
                <li><FontAwesomeIcon icon={faGitAlt} className="icon" /></li>
                <li><FontAwesomeIcon icon={faGithub} className="icon" /></li>
            </ul>
        </div>

    )
}