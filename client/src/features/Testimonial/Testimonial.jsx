import React, { Component } from 'react'
import style from './Testimonial.module.scss'
import Paragraph from '../../shared/Paragraph/Paragraph'
import { FaQuoteLeft } from "react-icons/fa";

export class Testimonial extends Component {
    img = this.props.text || 'none'
    
    render() {
        return (
            <div className={style['testimonial-item']}>
                <div className={style["testimonial-content"]}>
                    <div className={style["testimonial-header"]}>
                        <div className={style["testimonial-title"]}>
                            <b className={style.author}>{this.props.author}</b>
                            <FaQuoteLeft />
                        </div>
                        <span className={style['author-role']}>{this.props.authorRole}</span>
                    </div>
                    <Paragraph text={this.props.text}/>
                </div>
                <div className={style["author-image"]}>
                    <img src={this.img} alt="Author Image" />
                </div>
            </div>
        )
    }
}

export default Testimonial