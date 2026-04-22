function Footer(){
    return (
        <>
        <footer>
            <ul className="navigation-footer">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>

            <address className="footer address">
                <i className="fi fi-brands-maps"> </i>
                <p><strong>Address</strong></p>
                <p>123/2C Pranav street</p>
                <p>Mysore Karnataka</p>
                <p>India 536009</p>
            </address>
            <div>
                <h3>Follow us on</h3>
                <i className="fi fi-brands-instagram"> </i>
                <i className="fi fi-brands-linkedIn"> </i>
                <i className="fi fi-brands-youtube"> </i>
                <i className="fi fi-brands-twitter"> </i>
            </div>
            <p>&copy; 2026 MySite. All rights reserved </p>
        </footer>

        </>
    )
}
export default Footer;