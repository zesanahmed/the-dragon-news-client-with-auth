import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex aut, exercitationem officiis impedit consequuntur libero unde, recusandae magni laudantium dolorem vero tempore facere quaerat iusto fugiat soluta! Harum, magni!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;