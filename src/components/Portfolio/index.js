import React, { useState } from 'react';
import './style.css';

export default function Portfolio() {
    const [currentProject, setCurrentProject] = useState(1);
    
    if (currentProject === 1) {

    }

    if (currentProject === 2) {
    
    }

    if (currentProject === 3) {
        
    }

    if (currentProject === 4) {
    
    }

    return (
        <div className='container'>
            <div className='tile is-ancestor'>
                <div className='tile is-4 is-vertical is-parent'>
                    <figure className='tile is-child image is-3by1'>
                        <img src='https://via.placeholder.com/350x125' alt='1' />
                    </figure>
                    <figure className='tile is-child image is-3by1'>
                        <img src='https://via.placeholder.com/350x125' alt='1' />
                    </figure>
                    <figure className='tile is-child image is-3by1'>
                        <img src='https://via.placeholder.com/350x125' alt='1' />
                    </figure>
                    <figure className='tile is-child image is-3by1'>
                        <img src='https://via.placeholder.com/350x125' alt='1' />
                    </figure>
                </div>
                <div className='tile is-parent'>
                    <figure className='tile is-child image is-3by2'>
                        <img src='https://via.placeholder.com/1280x800' alt='1' />
                    </figure>
                </div>
            </div>
        </div>
    )
}