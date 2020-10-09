import React from 'react'
import './block.css'

const Block = ({title, desc}) => {
    return (
        <div className='block'>
            <div className='content'>

            </div>
            <div className='content-title'>{title}</div>
            <div className='content-description'>{desc}</div>
        </div>
    )
}

export default Block;