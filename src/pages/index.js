import React, { useState, useRef } from "react";
import "../scss/styles.scss";
import Gridz from "../components/Gridz";

const IndexPage = () => {

  const falseStates = {
    about: false,
    euphrates: false,
    tigris: false,
    sakarya: false,
  };

  const [openStates, setOpenStates] = useState(falseStates);

  const about = useRef();
  const euphrates = useRef();
  const tigris = useRef();
  const sakarya = useRef();
  const refs = [about, euphrates, tigris, sakarya]

  const handleClick = (project, refs) => {
    if (openStates[project]) {
      setOpenStates({
        ...falseStates,
      });
    } else {
      setOpenStates({
        ...falseStates,
        [project]: true,
      });
    }
    refs.forEach(ref => {
      ref.current.scrollTop = 0;
    });
  };

  const [color, setColor] = useState('primary')

  const handleColor = (color) => {
    setColor(color)
  }

  return (
    <div className={`home painted--${color}`}>
      <div className="left">
        <h1 className="title">Eva Tellier</h1>
        <h2
          className={`bio ${openStates.about && 'is--open'}`}
          onClick={() => handleClick('about', refs)}
        >
          About / CV
        </h2>
        <a href="mailto:evatellier16@gmail.com"
          className="mail"
        >
          mailto:evatellier16@gmail.com
        </a>
        {/* <div className="palette">
          <div className={`swatch primary ${(color === 'primary' && 'is--active')}`} onClick={() => handleColor('primary') }/>
          <div className={`swatch secondary ${(color === 'secondary' && 'is--active')}`} onClick={() =>  handleColor('secondary')}/>
          <div className={`swatch tertiary ${(color === 'tertiary' && 'is--active')}`} onClick={() => handleColor('tertiary') }/>
          <div className={`swatch quaternary ${(color === 'quaternary' && 'is--active')}`} onClick={() => handleColor('quaternary') }/>
          <div className={`swatch quinary ${(color === 'quinary' && 'is--active')}`} onClick={() => handleColor('quinary') }/>
        </div> */}
        <h3
          className={`project-title ${openStates.euphrates && 'is--open'}`}
          onClick={() => handleClick('euphrates', refs)}
        >
          Euphrates
        </h3>
        <h4 className="project-year">2021</h4>
        <h3
          className={`project-title ${openStates.tigris && 'is--open'}`}
          onClick={() => handleClick('tigris', refs)}
        >
          Tigris
        </h3>
        <h4 className="project-year">2021</h4>
        <h3
          className={`project-title ${openStates.sakarya && 'is--open'}`}
          onClick={() => handleClick('sakarya', refs)}
        >
          Sakarya
        </h3>
        <h4 className="project-year">2019</h4>
      </div>
      <Gridz
        refs={refs}
        falseStates={falseStates}
        openStates={openStates}
        handleClick={handleClick}
      />
    </div>
  );
};

export default IndexPage;
