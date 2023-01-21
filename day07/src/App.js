import "./App.css";

import React, { useState } from "react";

export const App = () => {
  const [input, setInput] = useState("");
  const [gifts, setGifts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || gifts.find((gift) => gift.description === input)) {
      alert("El regalo no puede ser vacio ni estar repetido");
      return;
    }
    setGifts([...gifts, { id: gifts.length + 1, description: input }]);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };
  const handleDelete = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };
  const handleDeleteAll = () => {
    setGifts([]);
  };

  return (
    <div className="content">
      <h1> 🎄 Regalos 🎄</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="Ingrese un regalo 👩‍💻"
        />
        <button type="submit">➕</button>
      </form>
      {gifts.length > 0 ? (
        <ul>
          {gifts.map(({ id, description }) => (
            <li key={id}>
              🎁 {description}{" "}
              <button onClick={() => handleDelete(id)}>❌</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>¡Añade un regalo a la lista!</p>
      )}
      <button className="btn-delete " onClick={handleDeleteAll}>
        Limpiar Todo 🧹
      </button>
    </div>
  );
};
