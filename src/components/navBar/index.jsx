import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Experience',
        to: '/portfolio/resume'
    },
    {
        label: 'Skills',
        to: '/portfolio/skills'
    },
    {
        label: 'About',
        to: '/portfolio/above'
    },
    {
        label: 'Resume',
        to: 'download',
    }
]

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // This will resolve to /portfolio/resume.pdf
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={"/"} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            item?.to === 'download' ? (
                                <li key={key} className="navbar__container__menu__item download">
                                    <a className="navbar__container__menu__item__links" onClick={handleDownload}>
                                        <FiDownload style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                        {item.label}
                                    </a>
                                </li>
                            ) : (
                                <li key={key} className="navbar__container__menu__item">
                                    <Link className="navbar__container__menu__item__links" to={item.to} onClick={handleToggleIcon}>
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar;