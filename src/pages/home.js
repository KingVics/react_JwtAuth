import React from 'react'
import style from "../styles/home.module.css"

//Component
import Carousel from "../components/carousel"
import WhyChooseUsCard from '../components/whyChooseUsCard'
import PracticeAreaCard from '../components/practiceAreaCard'


export default function Home() {
    return (
        <div className={style.homeContainer}>
            <div className={style.homeCarousel}>
                <Carousel />
            </div>
            <div className={style.ourPhilosophy}>
                <h1>Our Philosophy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tortor ut adipiscing tellus elementum lobortis. Risus iaculis ultrices id et rutrum feugiat. 
                    Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                    Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                    Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                </p>
            </div>
            <div className={style.whyChooseUs}>
                <div>
                    <h2>Why Choose Us?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis adipiscing lectus tempus ultricies enim. Sodales tempus tellus porttitor netus orci, venenatis sit lacinia.
                        Pellentesque aliquam aliquet vestibulum consectetur amet, scelerisque. Nullam etiam senectus duis et, quisque.
                    </p>
                    <div className={style.whyChooseUsCardContainer}>
                        <WhyChooseUsCard />
                    </div>
                </div>
            </div>
            <div className={style.practiceArea}>
                <h2>Our Practice Areas</h2>
                <div className={style.practiceAreaCardContainer}>
                    <PracticeAreaCard />
                </div>
            </div>
            
            
        </div>
    )
}
