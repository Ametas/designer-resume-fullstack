import React, { Component } from 'react'
import { FaInstagram } from "react-icons/fa";
import './SocialLink.scss'

export class SocialLink extends Component {
    socialText = this.props.socialText || 'socialText'
    href = this.props.href || '#'
    render() {
        const { icon: IconComponent } = this.props
        return (
            <a href={this.href} className='social-link'>
                <IconComponent />
                <span className="social-text">{this.socialText}</span>
            </a>
        )
    }
}

export default SocialLink