import React from 'react'
import './ChooseCard.scss'

function ChooseCard({ id, text, isActive }) {
    return (
        <div id={id} className={`choose-card ${isActive ? 'active' : ''}`}>
            <span className="card-text">{text}</span>
        </div>
    )
}

export default ChooseCard