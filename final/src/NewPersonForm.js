import React, { useState } from 'react';

const NewPersonForm = ({ addPerson }) => {
  const [newPerson, setNewPerson] = useState({
    name: '',
    birthday: '',
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPerson.name && newPerson.birthday && newPerson.image) {
      // Generate data URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        addPerson({
          name: newPerson.name,
          birthday: newPerson.birthday,
          image: reader.result, 
        });

        setNewPerson({ name: '', birthday: '', image: null });
      };

      reader.readAsDataURL(newPerson.image); // Read the image file as a data URL
    } else {
      console.log('pola nie mogą być puste');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setNewPerson({ ...newPerson, [name]: files[0] });
    } else {
      setNewPerson({ ...newPerson, [name]: value });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dodaj urodziny</h3>
      <div className='person'>
        <input
          className='form_element'
          type='text'
          name='name'
          value={newPerson.name}
          onChange={handleInputChange}
          placeholder='Wpisz imię i nazwisko'
        /> <label className='form_element'>Imię i nazwisko</label>
        <input
          className='form_element'
          type='date'
          name='birthday'
          value={newPerson.birthday}
          onChange={handleInputChange}
          placeholder='Urodziny'
        /> <label className='form_element'>Data urodzin</label>
        <input
          type='file'
          name='image'
          accept='.jpg, .jpeg, .png'
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className='container_button'>
        Dodaj osobę
      </button>
    </form>
  );
};

export default NewPersonForm;
