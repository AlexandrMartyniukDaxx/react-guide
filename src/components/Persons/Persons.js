import React from 'react';
import Person from './Person/Person';

// class Persons extends Component {
//     render() {
//         return <div>
//             {this.props.persons.map((p, ind) =>
//                 <Person key={ind} name={p.name} age={p.age}
//                     onInputChange={this.onNameChange.bind(this, ind)} />)}
//         </div>
//     }
// }

const persons = (props) => (
    props.persons.map((p, ind) =>
        <Person
            key={ind}
            name={p.name}
            age={p.age}
            onInputChange={(event) => props.changed(event.target.value, ind)} />));

export default persons;