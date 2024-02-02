import React from 'react'
import './ChooseCard.scss'

function ChooseCard({ id, text, isActive, onClick }) {
    return (
        <div id={id} className={`choose-card ${isActive ? 'active' : ''}` } onClick={onClick}>
            <span className="card-text">{text}</span>
        </div>
    )
}

export default ChooseCard