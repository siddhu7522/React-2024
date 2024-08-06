import React from 'react'

function Skills({skills}) {
    
    return (
        <div className='skill'>
            <p style={{backgroundColor:skills.color}}>{skills.skill}
            <span>{skills.level ==="beginner" && "😺"}</span>
            <span>{skills.level ==="intermediate" && "👽"}</span>
            <span>{skills.level ==="advanced" && "💪"}</span>
            </p>
        </div>
    )
}

export default Skills