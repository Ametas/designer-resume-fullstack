import React, { Component } from 'react'
import './Testimonial.scss'
import Paragraph from '../Paragraph/Paragraph'
import { FaQuoteLeft } from "react-icons/fa";

export class Testimonial extends Component {
    title = this.props.title || 'title'
    author = this.props.author || 'author'
    authorRole = this.props.authorRole || 'authorRole'
    text = this.props.text || 'text'
    img = this.props.text || 'none'
    
    render() {
        return (
            <div className='testimonial-item'>
                <div className="testimonial-content">
                    <div className="testimonial-header">
                        <div className="testimonial-title">
                            <b className="author">{this.author}</b>
                            <FaQuoteLeft />
                        </div>
                        <span className='author-role'>{this.authorRole}</span>
                    </div>
                    <Paragraph text={this.text}/>
                </div>
                <div className="author-image">
                    <img src={this.img} alt="Author Image" />
                </div>
            </div>
        )
    }
}

export default Testimonial