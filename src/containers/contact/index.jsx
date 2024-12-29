import React from "react";
import './styles.scss'
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

const Contact=()=>{
    return (
        <section id="contact" className="contact">
            <PageHeader
                headerText = "Contact"
                icon={<BsInfoCircleFill size={40}/>}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input name="name" className="inputName" type="{'text'}" required/>
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input name="email" className="inputEmail" type="{'text'}" required/>
                                <label htmlFor="email" className="emailLabel">EMAIL</label>
                            </div>
                            <div>
                                <textarea name="desc" className="inputDesc" type="{'text'}" rows="5" required/>
                                <label htmlFor="desc" className="descLabel">Description</label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}
export default Contact;