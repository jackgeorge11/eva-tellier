import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import G1 from '../images/g-1.jpeg';
import G2 from '../images/g-2.jpeg';
import G3 from '../images/g-3.jpeg';
import G4 from '../images/g-4.jpeg';
import M1 from '../images/m-1.jpg';
import M2 from '../images/m-2.jpeg';
import M3 from '../images/m-3.jpeg';
import M4 from '../images/m-4.jpeg';
import M5 from '../images/m-5.jpeg';
import M6 from '../images/m-6.jpeg';
import S1 from '../images/s-1.jpeg';
import S2 from '../images/s-2.png';
import S3 from '../images/s-3.jpeg';
import S4 from '../images/s-4.jpeg';
import AboutAndCv from './AboutAndCv';

export default function Gridz({refs, openStates, handleClick }) {

    const description = <p className="description">
        I’ve known rivers:
        <br/>
        I’ve known rivers ancient as the world and older than the flow of human blood in human veins.
        <br/>
        <br/>
        My soul has grown deep like the rivers.
        <br/>
        <br/>
        I bathed in the Euphrates when dawns were young.
        <br/>
        I built my hut near the Congo and it lulled me to sleep.
        <br/>
        I looked upon the Nile and raised the pyramids above it.
        <br/>
        I heard the singing of the Mississippi when Abe Lincoln went down to New Orleans, and I’ve seen its muddy bosom turn all golden in the sunset.
        <br/>
        <br/>
        I’ve known rivers:
        <br/>
        Ancient, dusky rivers.
        <br/>
        <br/>
        My soul has grown deep like the rivers.
    </p>

    return (
        <div className='right'>

            <div
                ref={refs[1]}
                className={`project ${openStates.euphrates && 'is--open'}`}
                onClick={() => handleClick('euphrates', refs)}
            >
                <h1 className="title">euphrates</h1>
                {description}
                <h3 className="date">2021</h3>
                <h3 className="intro">i bathed in the euphrates when dawns were young.</h3>
                <img src={G1} />
                <img src={G2} />
                <img src={G3} />
                <img src={G4} />
            </div>
            <div
                ref={refs[2]}
                className={`project ${openStates.tigris && 'is--open'}`}
                onClick={() => handleClick('tigris', refs)}
            >
                <h1 className="title">tigris</h1>
                {description}
                <h3 className="date">2021</h3>
                <h3 className="intro">i built my hut near the congo and it lulled me to sleep.</h3>
                <img src={M1} />
                <img src={M2} />
                <img src={M3} />
                <img src={M4} />
                <img src={M5} />
                <img src={M6} />
            </div>
            <div
                ref={refs[3]}
                className={`project ${openStates.sakarya && 'is--open'}`}
                onClick={() => handleClick('sakarya', refs)}
            >
                <h1 className="title">sakarya</h1>
                {description}
                <h3 className="date">2019</h3>
                <h3 className="intro">i looked upon the nile and raised the pyramids above it.</h3>
                <img src={S1} />
                <img src={S2} />
                <img src={S3} />
                <img src={S4} />
            </div>


            <div
                ref={refs[0]}
                className={`project about ${openStates.about && 'is--open'}`}
                onClick={() => handleClick('about', refs)}
            >
                <AboutAndCv/>
                <h3 className="date">About / CV</h3>
                <h3 className="intro">My ceramic practice revolves around the expression of feminine qualities.</h3>
            </div>
        </div>
    )
}
