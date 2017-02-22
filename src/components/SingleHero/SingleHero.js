import React from 'react';

import Frame from '../Frame/Frame';
import List from '../List/List';

import './SingleHero.css';

const SingleHero = ({heroes, heroId}) => {
    const hero = heroes.data[heroId];
    if(!hero) return null;

    const comics = hero.comics.returned ?
        hero.comics.items.map((comic) => comic.name) : null;
    const series = hero.series.returned ?
        hero.series.items.map((serie) => serie.name) : null;

    return (
        <div>
            <h1 className="section-title">Fiche identité :</h1>
            <div className="single-hero">
                <div className="single-hero__photo">
                    <img src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`} alt="hero" />
                </div>
                <div className="single-hero__details">
                    <Frame>
                        <h1 className="single-hero__title">{hero.name}</h1>
                        {hero.description ? <p className="single-hero__description">{hero.description}</p> : null}
                    </Frame>
                    <div className="single-hero__lists">
                        {comics ? <List title="Comics" items={comics} /> : null}
                        {series ? <List title="Series" items={series} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleHero;