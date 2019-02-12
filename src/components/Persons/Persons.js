import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    props.persons.map((p, ind) =>
        <Person
            click={() => props.click(ind)}
            key={ind}
            name={p.name}
            age={p.age}
            onInputChange={(event) => props.changed(event.target.value, ind)} />));

export default persons;