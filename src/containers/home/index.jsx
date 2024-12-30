import React from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactPage = () => {
        navigate('/portfolio/contact')
    }

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Sandeep
                </h1><br></br>
                <h3>Front-End Developer | Angular Expert | User Experience Enthusiast</h3>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translatex(0px)'
                }}
            >
                <div className="home__contact-me">
                    <div className="home__contact-me__desc">
                        <h2>Can reach out me at</h2>
                    </div>
                    <div className="home__contact-me__whatsapp">
                        <a href="https://wa.me/8121088990?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                            />
                        </a>
                    </div>
                    <div className="home__contact-me__gmail">
                        <a href="mailto:chsandeep2000@gmail.com?subject=Hello%20there!&body=I%20wanted%20to%20get%20in%20touch%20with%20you." target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                                alt="Gmail"
                            />
                        </a>
                    </div>
                </div>
            </Animate>
        </section>
    )
}
export default Home;