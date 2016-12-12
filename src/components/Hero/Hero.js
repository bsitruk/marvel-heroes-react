import React, { Component } from 'react';
import { Link } from 'react-router';
import './Hero.css';

import FaBook from 'react-icons/lib/fa/book';

class Hero extends Component {
    render() {
        return (
            <figure className="Hero">
                <div className="Hero-header">
                    <Link to={`hero/${this.props.i}`}>
                        <img className="Hero-image" alt="not found"
                             src={`${this.props.hero.thumbnail.path}/portrait_incredible.${this.props.hero.thumbnail.extension}`} />
                    </Link>
                </div>
                <div className="Hero-footer">
                    <h1 className="Hero-title">{this.props.hero.name}</h1>
                    <ul className="Hero-links">
                        {this.props.hero.urls.map((url, i) =>
                            <li className="Hero-links__item" key={i}>
                                <a className="Hero-links__anchor" href={url.url} target="_blank"><FaBook /> {url.type}</a>
                            </li>)}
                    </ul>
                </div>
            </figure>
        );
    }
}

export default Hero;