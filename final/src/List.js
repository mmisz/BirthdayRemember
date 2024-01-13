import React from 'react';

const List = ({ people }) => {
  console.log(people)
  return (
    <>
    <h3>Lista urodzin</h3>
    <div id='list'>
    {people.map((person) => {
        const { id, name, birthday, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Urodziny - {birthday} </p>
            </div>
          </article>
        );
      })}
    </div>
    </>
  );
};

export default List;
