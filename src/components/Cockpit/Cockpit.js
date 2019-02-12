import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.red);
    } else if(props.persons.length <= 2) {
        assignedClasses.push(classes.bold);
    }

    const btnClass = [classes.button];
    if(props.open) {
        btnClass.push(classes.open);
    }

    return (
        <div>
            <h1>Hello world</h1>
            <p className={assignedClasses.join(' ')}>This is my React app</p>
            <button className={btnClass.join(' ')} onClick={props.click}>Toggle persons</button>
        </div>
    );
}

export default cockpit;