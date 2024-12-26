import React from "react";
import './styles.scss'
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

const personalInformation = [
    { label: "Full Name", value: "Sandeep Cheemakurthi" },
    { label: "Mobile number", value: "8121088990" },
    { label: "Location", value: "Hyderabad, Telanagan, India" },
    { label: "E-Mail", value: "chsandeep2000@gmail.com" },
    { label: "LinkedIn", value: "https://linkedin.com/in/sandeep-cheemakurthi" },
]

const jobSummary = 'A seasoned Angular developer with three years of hands-on experience, I have a proven track record in crafting responsive web applications. My versatility extends to backend development, which enhances my ability to deliver comprehensive solutions. I am now eager to embrace new challenges and leverage my skills on innovative projects, contributing to meaningful advancements in technology.'

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeader
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalInfo">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: 'translateX(-1500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="personalInfoHeader">Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Personal Information</h3>
                        <ul>
                            {
                                personalInformation.map((item, i) => (
                                    <li key={i}>
                                        <span className="label">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                {/* <div className="about__content__servicesWrapper">
                    Services Wrapper
                </div> */}
            </div>
        </section>
    )
}
export default About;