import React,{useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {Row} from "react-bootstrap"
import { useDispatch,useSelector} from "react-redux"
import style from "../styles/counsel.module.css"

//Component
import CounselsCard from "../components/counselsCard"
import NotFound from "./notFound"

//API
import {fetchCounsel} from "../actions/request"
import Loader from "../components/loader"

function Counsel() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const counsel = useSelector((state) => state.counsel.data)

    setTimeout(() => {
        setIsLoading(false)
    }, 5000)


    
    useEffect(() => {
        dispatch(fetchCounsel())
    

    }, [dispatch])

    const pushPage = () => {
        history.push('/partners')
    }

    const pushPageTraineee = () => {
        history.push('/trainees')
    }

    console.log(counsel);
    if(!counsel) {
        return (
            <NotFound 
                title="Counsel"
            />
        )
    }
    return (
        <div className={style.attorneyContainer}>
            <div className={style.buttonContainer}>
                <button onClick={pushPage} >Partners</button>
                <button>counsel</button>
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

export default Counsel;
