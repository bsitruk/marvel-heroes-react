import React from 'react';
import { Link } from 'react-router';
import './Hero.css';

import FaBook from 'react-icons/lib/fa/book';

const Hero = ({i, hero}) => (
    <figure className="Hero">
        <div className="Hero-header">
            <Link to={`hero/${i}`}>
                <img className="Hero-image" alt="not found"
                        src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`} />
            </Link>
        </div>
        <div className="Hero-footer">
            <h1 className="Hero-title">{hero.name}</h1>
            <ul className="Hero-links">
                {hero.urls.map((url, i) =>
                    <li className="Hero-links__item" key={i}>
                        <a className="Hero-links__anchor" href={url.url} target="_blank"><FaBook /> {url.type}</a>
                    </li>)}
            </ul>
        </div>
    </figure>
);

export default Hero;