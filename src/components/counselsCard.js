import React from 'react'
import {Col} from "react-bootstrap"
import style from "../styles/counsel.module.css"

export default function CounselsCard(props) {
    return (
        <Col  sm={6} md={6} lg={6} xl={4} key={props.id} style={{position: "unset"}}>
            <div className={style.attorneyCard}  key={props?.id}>
                <img src={props?.pic_url} alt="" />
                <div>
                    <h2>{props?.name}</h2>
                    <p>{props?.biography}</p>
                    <button>View {props?.name.split(" ")[0]}'s profile</button>
                </div>
            </div>
        </Col>
    )
}
