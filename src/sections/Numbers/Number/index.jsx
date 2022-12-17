import React from 'react'
import './style.css';

const Number = ({ img, number, title }) => {
    return (
        <div className='number-card'>
            <img src={img} alt={title} className="number-card-img" />
            <div>
                <h2>{number}</h2>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Number