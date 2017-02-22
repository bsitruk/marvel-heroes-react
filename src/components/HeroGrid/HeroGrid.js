import React from 'react';
import Hero from '../Hero/Hero';

import './HeroGrid.css';

const HeroGrid = ({heroes, visibility}) => (
    <div>
        <h1 className="section-title">Liste des super héros :</h1>
        <div className="hero-grid">
            { !visibility ? 
                heroes.data.map((hero, i) => <Hero key={i} i={i} hero={hero} />) : 
                visibility.map((i) => <Hero key={i} i={i} hero={heroes.data[i]} />) }
        </div>
    </div>
);

export default HeroGrid;