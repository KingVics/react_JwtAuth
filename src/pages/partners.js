import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {Row} from "react-bootstrap"
import{useDispatch, useSelector} from "react-redux"
import style from "../styles/counsel.module.css"


//Component
import CounselsCard from "../components/counselsCard"

//API
import {fetchPartners} from "../actions/request"
import Loader from "../components/loader"
import NotFound from './notFound'



export default function Partners() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const counsel = useSelector((state) => state.counsel.data)

    setTimeout(() => {
        setIsLoading(false)
    }, 5000)
    console.log(counsel);

    useEffect(() => {
        let button = document.getElementById('partner')
        if(window.location.pathname === '/partners') {
            // button.style.backgroundColor = "#D9CB39"
        }
        else {
            button.style.backgroundColor = "transparent"
        }

        dispatch(fetchPartners())
        
    
    }, [dispatch])

    

    const pushPage = () => {
        history.push('/counsel')
    }

    const pushPageTraineee = () => {
        history.push('/trainees')
    }

    if(!counsel) {
        return (
            <NotFound 
                title="Partners"
            />
        )
    }
    return (
        <div className={style.attorneyContainer}>
            <div className={style.buttonContainer}>
                    <button id="partner">partners</button>
                    <button onClick={pushPage}>counsel</button>
                    <button onClick={pushPageTraineee}>trainees</button>
            </div>
            <div className={style.attorneyCardContainer}>
                {isLoading? 
                    <Loader />
                : 
                <Row>
                    {counsel.map((item) => (
                        <CounselsCard 
                            pic_url={item.pic_url}
                            name={item.name}
                            biography={item.biography}
                            key={item.id}
                        />

                    ))}
                </Row>
                }
                
            </div>
        </div>
    )
}
