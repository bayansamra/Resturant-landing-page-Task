import React from 'react'
import './style.css'

const Blogcard = ({ img, title, text, imgLast }) => {
    return (
        <div className='blogs-card'>
            <img src={img} alt="" style={{ order: imgLast ? 2 : -1 }} />
            <div className="blogs-card-content">
                <h4 className="title">{title}</h4>
                <p>{text}</p>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default Blogcard