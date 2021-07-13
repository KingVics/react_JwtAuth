import React from 'react';
import { Link } from "react-router-dom"
import style from "../styles/home.module.css"

// DATA
import data from "../data/practiceAreaHome"

const PracticeAreaCard = () => {
    return (
        <>  
            {data.map((item) => (
                <div className={style.practiceAreaCard} key={item.id}>
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                    <div>
                        <Link to="#">Read More</Link>
                    </div>
                </div>

            ))}
        </>
    );
}

export default PracticeAreaCard;
