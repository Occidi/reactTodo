import React from 'react';
import {Link} from 'react-router';

let About = React.createClass({
    render: function() {
        return(
            <div>
                <Link to={'/'}>Home</Link>
                <h2>About page</h2>
            </div>
        );
    },
});

module.exports = About;
