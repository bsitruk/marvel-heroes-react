import React from 'react';

import './List.css';

const List = ({title, items}) => (
    <div>
        <h2 className="List__title">{title}</h2>
        <ul className="List__container">
            {items.map((item, i) =>
                <li className="List__item" key={i}>{item}</li>)}
        </ul>
    </div>
);

export default List;