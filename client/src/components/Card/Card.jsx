import React, { Component } from 'react'
import './Card.scss'

import { FaArrowRight } from "react-icons/fa";


export class Card extends Component {
    img = this.props.img || 'none'
    title = this.props.title || 'title'
    text = this.props.text || 'text'
    actionHref = this.props.href || 'href'
    actionText = this.props.actionText || 'actionText'
    render() {
        return (
            <div className='card'>
                <div className="icon">
                    <img src={this.img} alt="Card Image" />
                </div>
                <h2 className="card-title">{this.title}</h2>
                <p className="card-text">{this.text}</p>
                <div className="card-action">
                    <a href={this.actionHref} className="action">
                        <FaArrowRight />
                    </a>
                    <i className="action-text">{this.actionText}</i>
                </div>
            </div>
        )
    }
}

export default Card