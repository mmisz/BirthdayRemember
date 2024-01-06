import React, { useState, useEffect } from 'react';

const RangeReminder = ({ people, setFilteredPeople }) => {
  const [monthsAhead, setMonthsAhead] = useState(1);

  useEffect(() => {
    // Filter people based on the selected range
    const currentDate = new Date();
    const filteredPeople = people.filter((person) => {
      const personBirthday = new Date(person.birthday);
      const nextBirthday = new Date(
        currentDate.getFullYear(),
        personBirthday.getMonth(),
        personBirthday.getDate()
      );

      const monthsDifference =
        (nextBirthday - currentDate) / (1000 * 60 * 60 * 24 * 30);

      return monthsDifference <= monthsAhead;
    });

    // Sort filtered people by birthday
    const sortedPeople = filteredPeople.sort((a, b) => {
      const birthdayA = new Date(a.birthday);
      const birthdayB = new Date(b.birthday);
      return birthdayA - birthdayB;
    });

    // Update the state with the sorted and filtered people
    setFilteredPeople(sortedPeople);
  }, [people, monthsAhead, setFilteredPeople]);

  return (
    <section className='container'>
      <h3>Przypomnienie o urodzinach</h3>
      <label htmlFor='monthsAhead'>Wybierz liczbę miesięcy:</label>
      <input
        type='range'
        id='monthsAhead'
        name='monthsAhead'
        min='1'
        max='12'
        value={monthsAhead}
        onChange={(e) => setMonthsAhead(parseInt(e.target.value, 10))}
      />
      <p>
        Wybrana liczba miesięcy: {monthsAhead}{' '}
        {monthsAhead === 1 ? 'miesiąc' : 'miesiące'}
      </p>
    </section>
  );
};

export default RangeReminder;
