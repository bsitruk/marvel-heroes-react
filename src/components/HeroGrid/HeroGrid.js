import React, { Component } from 'react';
import Hero from '../Hero/Hero';

import './HeroGrid.css';

class HeroGrid extends Component {
    render() {
        return (
            <div>
                <h1 className="section-title">Liste des super héros :</h1>
                <div className="hero-grid">
                    {this.props.heroes.data.map((hero, i) =>
                        <Hero key={i} i={i} hero={hero} />)}
                </div>
            </div>
        );
    }
}

export default HeroGrid;