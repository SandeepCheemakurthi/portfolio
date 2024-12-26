import React, { useState } from "react";
import './styles.scss'
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

const portfolioData = [
    {
        id: 2,
        name: "Ecommerce",
        image:"Ecommerce",
        link: ''
    },
    {
        id: 2,
        name: "Food Delivery App",
        image:"Food Delivery App",
        link: ''
    },
    {
        id: 3,
        name: "Figma Designs",
        image: "Figma Designs",
        link: ''
    }
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Design'
    }
]

const Otherprojects=()=>{

    const [filteredvalue,setFilteredValue]= useState(1);
    const [hoveredValue,setHoveredValue]= useState(null);

    function handleFilter(currentId){
        setFilteredValue(currentId);
    }

    function handleHover(index){
        setHoveredValue(index);
    }

    console.log('========================');
    console.log(hoveredValue)
    console.log('========================');

    console.log('========================');
    console.log(filteredvalue)
    console.log('========================');

    const filteredItems = filteredvalue === 1 ? portfolioData: 
    portfolioData.filter(item=>item.id === filteredvalue);

    console.log('filteredItems',filteredItems)
    return (
        <section id="otherprojects" className="otherprojects">
            <PageHeader
                headerText = "Other Projects"
                icon={<BsInfoCircleFill size={40}/>}
            />
            <div className="otherprojects__content">
                <ul className="otherprojects__content__filter">
                    {
                        filterData.map(item=>(
                            <li className={item.filterId == filteredvalue ? 'active': ''} key={item.filterId} onClick={()=>handleFilter(item.filterId)}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className="otherprojects__content__cards">
                    {
                        filteredItems.map((item,index)=>(
                            <div className="otherprojects__content__cards__item" 
                                 key={`cardItem${item.name.trim()}`}
                                 onMouseEnter={()=>handleHover(index)}
                                 onMouseLeave={()=>handleHover(null)}>
                                <div className="otherprojects__content__cards__item__img-wrapper">
                                    <a>
                                        {/* <img src="{item.image}"/> */}
                                        <h3>{item.image}</h3>
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <button>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Otherprojects;