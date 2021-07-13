import React from 'react'
import "../styles/notFound.css"

export default function NotFound(props) {
    return (
        <div className="notFound">
            <h1>No {props.title} found</h1>
        </div>
    )
}
