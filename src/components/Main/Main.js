import React, { Component } from 'react';
import { Link } from 'react-router';
import marvel from '../../MarvelLogo.png';

import './Main.css';

class Main extends Component {
    componentWillMount() {
        this.props.fetchHeroesData();
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <Link to="/">
                        <h1 className="main-title"> <img src={marvel} role="presentation"/></h1>
                    </Link>

                    {this.props.heroes.fetching ? <p className="loading-message">Loading...</p> : null}

                    {/* Method to pass App props to its children (HeroGrid or SingleHero) */}
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

export default Main;
