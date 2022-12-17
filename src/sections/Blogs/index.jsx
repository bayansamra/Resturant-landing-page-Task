import React from 'react'
import Grid3Columns from '../../components/Grid3Columns'
import SectionTitle from '../../components/SectionTitle'
import Blogcard from './cardBlog'
import blog1image from '../../assets/blog1.png'
import blog2image from '../../assets/blog2.png'
import blog3image from '../../assets/blog3.png'
import './style.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <SectionTitle title={"Blogs"} subTitle="words from our food lovers" isCentered />
            <Grid3Columns>
                <Blogcard
                    img={blog1image}
                    title="Cooking Dining Experience"
                    text="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sollicitudin"
                />
                <Blogcard
                    img={blog2image}
                    title="Cooking Dining Experience"
                    text="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sollicitudin"
                    imgLast
                />
                <Blogcard
                    img={blog3image}
                    title="Cooking Dining Experience"
                    text="Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Sollicitudin"
                />
            </Grid3Columns>
        </div>
    )
}

export default Blogs