import { Link } from "react-router-dom";
import React from "react";


const Header = () => {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="site-title">YES BOSS</Link>
                <ul>
                    <CustomLink to="/pricing" className="pricing-link">Pricing</CustomLink>
                    <CustomLink to="/about" className="pricing-link">About</CustomLink>
                    <Link to="/appointment" className="appointment-button">
                        Appointment
                    </Link>
                </ul>
            </nav>

            
        </>
    )
}

function CustomLink({ to, children, ...props }) {
    return (
        <li>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}






export default Header;
