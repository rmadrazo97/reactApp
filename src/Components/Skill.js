import React from "react"
import './Skill.css'

function Skill(props) {
    return (
        <div className="skill">
            <h5 className="skill-txt">{props.info.title}</h5>
        </div>
    )
}

export default Skill