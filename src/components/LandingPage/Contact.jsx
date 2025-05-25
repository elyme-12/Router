import facebook from '../Image/facebook.png'; // Correct path
import telegram from '../Image/telegram.png'; // Correct path
import tiktok from '../Image/tiktok.png'; // Correct path
import email from '../Image/email.png'; // Correct path



function Contact(){
    return (
        <section id="contact">
            <h2 className="contact_heading">Contact Me</h2>
            <p className="cnct">Feel free to reach out through any of the platforms below:</p>
            <div className="contact_container">
                <div className="contact-links">
                    <a href="https://myaccount.google.com/" className="contact-link">
                        <img src={email} alt="Gmail Logo" />
                    </a>
                    <a href="https://www.facebook.com/elysalyn.barlan.9" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook Logo" />
                    </a>
                    <a href="https://www.tiktok.com/@kyoomin_12" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt="Tiktok Logo" />
                    </a>
                    <a href="https://t.me/elimint24" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="Telegram Logo" />
                    
                    </a>
                </div>
            </div>

        </section>
        
    );
};

export default Contact;
