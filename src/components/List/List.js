import React, {Component} from 'react';

import './List.css';

class List extends Component {
    render() {
        return (
            <div>
                <h2 className="List__title">{this.props.title}</h2>
                <ul className="List__container">
                    {this.props.items.map((item, i) =>
                        <li className="List__item" key={i}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default List;