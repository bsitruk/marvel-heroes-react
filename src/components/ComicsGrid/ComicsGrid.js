import React from 'react';
import { Link } from 'react-router';

import './ComicsGrid.css';

const ComicsGrid = ({comics, setVisibility}) => (
    <div>
        <h1 className="section-title">Liste des Comics :</h1>
        <ul className="List__container">
            {comics.map((comic, i) =>
                <Link to={`/`} className="ComicsGrid__item" key={i}>
                    <li className="List__item" onClick={() => setVisibility(comic.heroes)}>
                        {comic.name}
                    </li>
                </Link>)}
        </ul>
    </div>
);

export default ComicsGrid;