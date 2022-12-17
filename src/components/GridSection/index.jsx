import React from 'react'
import Button from '../Button'
import Container from '../Container'
import SectionTitle from '../SectionTitle'

import './style.css'
const GridSection = ({ title, Desc, desc, img }) => {
    return (
        <div className='grid-section'>
            <Container>
                <div className="grid-section-content">
                    <div>
                        <SectionTitle title={title} subTitle={Desc} />
                        <p className="grid-section-desc">{desc}</p>
                        <Button>Read more</Button>
                    </div>
                    <div className='grid-section-image-container'>
                        <img src={img} alt="grid-section-Image" />
                    </div>
                </div>
            </Container>
        </div>)
}

export default GridSection