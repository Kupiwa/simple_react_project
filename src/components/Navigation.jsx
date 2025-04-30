

import { Link } from 'react-router-dom';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Navigation() {

    return (
        <nav id="navigation">
                
                <h1 className="title"><Link to="/">{"<K/N>"}</Link></h1>

                <ul className="list-container">
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <a href="https://github.com/kupiwa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} id="icon" /></a>
                    </li>
                </ul>

            </nav>
    )
}

export default Navigation;