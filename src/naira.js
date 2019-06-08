import React from 'react';

const Naira =  (props) => {
    const formatter = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2});

    return (
        <span>&#x20a6;{formatter.format(props.children)}</span>
    );
};

export default Naira;