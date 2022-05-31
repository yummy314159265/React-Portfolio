import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import resume from './assets/download/tech-resume.docx';

export default function Resume() {
    return (
        <div className='container'>
            <p className='title is-size-2'>
                <a href={resume} download>
                    Resume <FontAwesomeIcon icon={faDownload} /> 
                </a>
            </p>
            <div className='content is-medium'>
                <div className='columns'>
                    <div className='column is-6 has-text-centered'>
                        <p className='has-text-weight-semibold'>
                            Front-end Skills
                        </p>
                        <ul className='no-bullet'>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JS
                            </li>
                            <li>
                                jQuery
                            </li>
                            <li>
                                Git
                            </li>
                        </ul>
                    </div>
                    <div className='column is-6 has-text-centered'>
                        <p className='has-text-weight-semibold'>
                            Back-end Skills
                        </p>
                        <ul className='no-bullet'>
                            <li>
                                Node
                            </li>
                            <li>
                                ExpressJS
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                MYSQL
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                PWA
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};