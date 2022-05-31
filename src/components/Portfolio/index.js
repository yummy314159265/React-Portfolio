import React, { useState } from 'react';
import Project from './Project/index.js'
import './style.css';
import smApeSimProject from './assets/images/ape-simulator-project/sm.png'
import lgApeSimProject from './assets/images/ape-simulator-project/lg.png'
import smUfoProject from './assets/images/ufo-project/sm.png';
import lgUfoProject from './assets/images/ufo-project/lg.png';
import smTechBlogProject from './assets/images/tech-blog-project/sm.png';
import lgTechBlogProject from './assets/images/tech-blog-project/lg.png';
import smJateProject from './assets/images/jate-project/sm.png';
import lgJateProject from './assets/images/jate-project/lg.png';

export default function Portfolio() {
    const [lgImg, setLgImg] = useState(lgApeSimProject);
    const [lgAlt, setLgAlt] = useState('Ape Simulator project large');
    
    const handleBigImgChange = (img) => {
        setLgImg(img);

        if (img === lgApeSimProject) {
            setLgAlt('Ape Simulator large');
        }
        
        if (img === lgUfoProject) {
            setLgAlt('UFO project large');
        }

        if (img === lgTechBlogProject) {
            setLgAlt('Tech Blog project large');
        }

        if (img === lgJateProject) {
            setLgAlt('Just Another Text Editor project large');
        }
    }

    return (
        <div className='container'>
            <div className='tile is-ancestor'>
                <div className='tile is-4 is-vertical is-parent'>
                    <Project handleBigImgChange={handleBigImgChange} smImg={smApeSimProject} lgImg={lgApeSimProject} alt={'Ape Simulator project small'} />
                    <Project handleBigImgChange={handleBigImgChange} smImg={smUfoProject} lgImg={lgUfoProject} alt={'UFO project small'} />
                    <Project handleBigImgChange={handleBigImgChange} smImg={smTechBlogProject} lgImg={lgTechBlogProject} alt={'Tech Blog project small'} />
                    <Project handleBigImgChange={handleBigImgChange} smImg={smJateProject} lgImg={lgJateProject} alt={'Just Another Text Editor project small'} />
                </div>
                <div className='tile is-parent'>
                    <figure className='tile is-child image is-4by3'>
                        <img src={lgImg} alt={lgAlt} />
                    </figure>
                </div>
            </div>
        </div>
    )
}