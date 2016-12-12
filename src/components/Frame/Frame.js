import React, { Component } from 'react';

import './Frame.css';

class Frame extends Component {
    render() {
        return (
            <div className="Frame">
                <div className="Frame__main">
                    {this.props.children}
                </div>
                <div className="Frame__left"></div>
                <div className="Frame__right"></div>
            </div>
        );
    }
}

export default Frame;