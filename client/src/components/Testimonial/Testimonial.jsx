import React, { Component } from 'react'
import './Testimonial.scss'
import Paragraph from '../Paragraph/Paragraph'
import { FaQuoteLeft } from "react-icons/fa";

export class Testimonial extends Component {
    img = this.props.text || 'none'
    
    render() {
        return (
            <div className='testimonial-item'>
                <div className="testimonial-content">
                    <div className="testimonial-header">
                        <div className="testimonial-title">
                            <b className="author">{this.props.author}</b>
                            <FaQuoteLeft />
                        </div>
                        <span className='author-role'>{this.props.authorRole}</span>
                    </div>
                    <Paragraph text={this.props.text}/>
                </div>
                <div className="author-image">
                    <img src={this.img} alt="Author Image" />
                </div>
            </div>
        )
    }
}

export default Testimonial