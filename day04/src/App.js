import React, { useState } from 'react';
import './App.css';

export function App() {
  const [gifts, setGifts] = useState([
    {
      id: 1,
      description: 'Vitel Tone'
    }
  ]);
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGifts([...gifts, { description: input, id: gifts.length + 1 }]);
    setInput('');
  };
  const handleDelete = (gift) => {
    setGifts(gifts.filter((regalo) => regalo.id !== gift.id));
  };

  return (
    <div className="content">
      <h1>Regalos:</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Inserte un regalo"
          value={input}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {gifts.map((gift) => (
          <li key={gift.id}>
            {gift.description}{' '}
            <button type="button" onClick={() => handleDelete(gift)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
