import React from "react";
import './styles.scss'
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

const Resume=()=>{
    return (
        <section id="resume" className="Resume">
            <PageHeader
                headerText = "Resume"
                icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}
export default Resume;