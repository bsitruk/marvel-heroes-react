import React from 'react';

import './Frame.css';

const Frame = ({children}) => (
    <div className="Frame">
        <div className="Frame__main">
            {children}
        </div>
        <div className="Frame__left"></div>
        <div className="Frame__right"></div>
    </div>
);

export default Frame;