import React, { Component } from 'react'
import './Resume.scss'
import Container from '../../shared/Container/Container';
import { SectionTitle } from '../../shared/SectionTitle/SectionTitle';
import { Title } from '../../shared/Title/Title';
import Tab from '../../shared/Tab/Tab';
import SkillBar from '../../shared/SkillBar/SkillBar';
import { BorderImage } from '../../features/BorderImage/BorderImage';

export class ResumeSection extends Component {
    render() {
        return (
            <section className='resume'>
                <Container>
                    <div className="resume-content">
                        <SectionTitle data='Resume'/>
                        <Title text='Skill & Experience'/>
                        <div className="tabs">
                            <Tab text='Design' isActive={true} />
                            <Tab text='Experience' isActive={false} />
                            <Tab text='Education' isActive={false} />
                        </div>
                        <SkillBar title='Adobe Illustrator' percent='90' />
                        <SkillBar title='Adobe Photoshop' percent='80' />
                        <SkillBar title='Adobe After Effect' percent='70' />
                        <SkillBar title='Figma' percent='60' />
                    </div>
                    <div className="resume-image">
                        <BorderImage />
                    </div>
                </Container>
            </section>
        )
    }
}

export default ResumeSection