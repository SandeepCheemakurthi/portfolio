import React from "react";
import './styles.scss'
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

const Contact=()=>{
    return (
        <section id="contact" className="contact">
            <PageHeader
                headerText = "Contact"
                icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}
export default Contact;