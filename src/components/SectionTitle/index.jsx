import React from 'react'
import './style.css'
const SectionTitle = ({ title, subTitle, isCenter }) => {
    return (
        <>
            <h2 className="title" style={{ textAlign: isCenter ? "center" : "start" }}>{title}</h2>
            <p className="sub-title" style={{ textAlign: isCenter ? "center" : "start" }}>
                {subTitle}
            </p>
        </>
    )
}

export default SectionTitle