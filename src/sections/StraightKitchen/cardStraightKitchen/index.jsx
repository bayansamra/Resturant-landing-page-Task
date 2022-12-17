import React from 'react'
import './style.css'

const StraightFromKitchenCard = ({ img, text1, text2, num }) => {
    return (
        <div className='straight-from-kitchen-card'>
            <img src={img} alt="card 1" />
            <div className='straight-from-kitchen-card-content'>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <div className="line"></div>
            <p>{num}</p>
        </div>
    )
}

export default StraightFromKitchenCard