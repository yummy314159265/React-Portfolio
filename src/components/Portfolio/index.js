import React, { useState } from 'react';
import './style.css';
import smUfoProject from './assets/images/ufo-project/sm.png';
import lgUfoProject from './assets/images/ufo-project/lg.png';

export default function Portfolio() {
    const [currentProject, setCurrentProject] = useState(lgUfoProject);
    const [altText, setAltText] = useState('UFO project large');
    
    const handleProjectChange = (project) => {
        setCurrentProject(project);
        
        if (project === lgUfoProject) {
            setAltText('UFO project large');
        }
    }

    return (
        <div className='container'>
            <div className='tile is-ancestor'>
                <div className='tile is-4 is-vertical is-parent'>
                    <figure className='tile is-child image is-3by1'>
                        <a 
                            href='#portfolio'
                            onClick={()=>handleProjectChange(lgUfoProject)}
                        >
                            <img src={smUfoProject} alt='ufo project small' />
                        </a>
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
                    <figure className='tile is-child image is-4by3'>
                        <img src={currentProject} alt={altText} />
                    </figure>
                </div>
            </div>
        </div>
    )
}