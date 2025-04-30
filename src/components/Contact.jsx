import "./components-styling/Contact.css";
import Navigation from "./Navigation";

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <>
            <Navigation />
            <div className="contact-container">
                <h2>Get in Touch</h2>
                <p>I'd love to hear from you! Reach out via any platform below:</p>

                <address>
                    <ul className="contact-list">
                        <li>
                            <FontAwesomeIcon icon={faGoogle} className="icon" />
                            {" "}
                            <a href="mailto:nangatikupiwa@gmail.com">nangatikupiwa@gmail.com</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXTwitter} className="icon" />
                            {" "}
                            <a href="https://x.com/coop__wa" target="_blank" rel="noopener noreferrer">@coop__wa</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            {" "}
                            <a href="https://www.linkedin.com/in/kupiwanangati" target="_blank" rel="noopener noreferrer">Kupiwa Nangati</a>
                        </li>
                    </ul>
                </address>
            </div>
        </>
    );
}

export default Contact;
