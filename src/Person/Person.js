import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name}! and I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>);
};

export default Person;