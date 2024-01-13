import React, { useState } from 'react';
import data from './data';
import List from './List';
import NewPersonForm from './NewPersonForm';
import RangeReminder from './RangeReminder';

function App() {
  const [people, setPeople] = useState(data);
  const [filteredPeople, setFilteredPeople] = useState([]);

  const addPerson = (newPersonData) => {
    setPeople([...people, newPersonData]);
  };

  return (
    <main>
      <section className='container'>
      <h1>Pamiętaj o mnie!</h1>
        <RangeReminder people={people} setFilteredPeople={setFilteredPeople} />
        <List people={filteredPeople.length > 0 ? filteredPeople : people} />
        <NewPersonForm addPerson={addPerson} dataLength={people.length} />
      </section>
    </main>
  );
}

export default App;
