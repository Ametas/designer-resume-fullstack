import React, { Component } from 'react'
import { FaInstagram } from "react-icons/fa";
import './SocialLink.scss'

export class SocialLink extends Component {
    render() {
        const { icon: IconComponent } = this.props
        return (
            <a 
            target='_blank' 
            href={`https://${this.props.href}/${this.props.socialText}`} 
            className='social-link'>
                <IconComponent />
                <span className="social-text">{this.props.socialText}</span>
            </a>
        )
    }
}

export default SocialLink