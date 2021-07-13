import React from 'react'
import {Carousel} from "react-bootstrap"

// STYLE
import style from "../styles/carousel.module.css"

// DATA
import data from "../data/carousel"

export default function CardSlider() {
    return (
        <div className={style.CarouselC}>
            <div className="MainCarousel"> 
            <Carousel    className={style.CarouselContainer} indicators={false} fade controls={false} style={{zIndex: "-1"}}>
                {data.map((item) => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="animate__animated animate__zoomIn">{item.context}</h1>
                            <p className="animate__animated animate__zoomIn">{item.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                ))}
            </Carousel>
         </div>
        </div>
    )
}


