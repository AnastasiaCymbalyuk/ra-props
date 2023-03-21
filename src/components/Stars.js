import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import shortid from 'shortid';

export default function Stars({ count }) {
    const result = !Number(count) || count > 5 || count < 1 ? false : true;
    
    const newArray = [];
    for (let i = 0; i < count; i++) {
        newArray.push(i);
    }
    
    return (
        <ul className="card-body-stars u-clearfix">
            { result && newArray.map((item) => <li key={shortid.generate()}><Star/></li>) }  
        </ul>
    );
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

Stars.defaultProps = {
    count: 0,
};