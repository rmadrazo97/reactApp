import React from "react"
import './Card.css'

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img onMouseOver={() => console.log('being logged')} src={props.img} alt="name" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.title}</b></h4>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card