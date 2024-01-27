import React, { Component } from 'react'
import './SkillBar.scss'

export class SkillBar extends Component {
    percent = this.props.percent || '90'
    title = this.props.title || 'Title'

    fillStyle = {
        width: `${this.percent}%`
    }

    render() {
        return (
            <div className='skill-box'>
                <span className="title"><b>{this.title}</b><i>{`${this.percent}%`}</i></span>
                <div className="skill-bar">
                    <div className="skill-percent" style={this.fillStyle}></div>
                </div>
            </div>
        )
    }
}

export default SkillBar