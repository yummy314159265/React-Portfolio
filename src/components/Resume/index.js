import React from 'react';
import Logos from './Logos/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import resume from './assets/download/tech-resume.docx';
// frontend logos
import htmlLogo from './assets/images/html-logo.png';
import cssLogo from './assets/images/css-logo.png';
import javascriptLogo from './assets/images/javascript-logo.png';
import jqueryLogo from './assets/images/jquery-logo.png';
import githubLogo from './assets/images/github-logo.png';
// backend logos
import nodeLogo from './assets/images/node-logo.png';
import expressLogo from './assets/images/express-logo.svg';
import reactLogo from './assets/images/react-logo.png';
import mysqlLogo from './assets/images/mysql-logo.png';
import mongodbLogo from './assets/images/mongodb-logo.png';
import pythonLogo from './assets/images/python-logo.png';
import webpackLogo from './assets/images/webpack-logo.png';

export default function Resume() {
    const columnAmt = 2;
    
    const frontEndLogos = [
        {
            img: htmlLogo,
            alt: 'html logo',
        },
        {
            img: cssLogo,
            alt: 'html logo',
        },
        {
            img: javascriptLogo,
            alt: 'javascript logo',
        },
        {
            img: jqueryLogo,
            alt: 'jquery logo',
        },
        {
            img: githubLogo,
            alt: 'github logo',
        }
    ]

    const backEndLogos = [
        {
            img: nodeLogo,
            alt: 'node logo',
        },
        {
            img: expressLogo,
            alt: 'express logo',
        },
        {
            img: reactLogo,
            alt: 'react logo',
        },
        {
            img: mysqlLogo,
            alt: 'mysql logo',
        },
        {
            img: mongodbLogo,
            alt: 'mongo db logo',
        },
        {
            img: pythonLogo,
            alt: 'python logo'
        },
        {
            img: webpackLogo,
            alt: 'webpack logo',
        }
    ]

    return (
        <div className='container'>
            <p className='title is-size-2'>
                <a href={resume} download>
                    Resume <FontAwesomeIcon icon={faDownload} /> 
                </a>
            </p>
            <div className='content is-medium'>
                <div className='columns'>
                    <Logos columnAmt={columnAmt} columnName='Front End' logos={frontEndLogos} />
                    <Logos columnAmt={columnAmt} columnName='Back End' logos={backEndLogos} />
                </div>
            </div>
        </div>
    )
};