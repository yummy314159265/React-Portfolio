import React from 'react';
import './style.css';

export default function Project({handleBigImgChange, lgImg, smImg, alt}) {
    return (
        <figure className='tile is-child image is-3by1'>
            <a
                href='#portfolio'
                onClick={()=>handleBigImgChange(lgImg)}    
            >
                <img src={smImg} alt={alt} />
            </a>
        </figure>
    )
}