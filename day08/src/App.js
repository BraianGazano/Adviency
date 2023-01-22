import "./App.css";

import React, { useState } from "react";

export const App = () => {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState();
  const [gifts, setGifts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input ||
      gifts.find((gift) => gift.description === input) ||
      !quantity
    ) {
      alert("El regalo y la cantidad no pueden estar vacio ni estar repetido");
      return;
    }
    const newGift = {
      id: gifts.length + 1,
      description: input,
      quantity: quantity,
    };
    setGifts([...gifts, newGift]);
    setInput("");
  };
  const handleQuantity = (e) => {
    setQuantity(e.currentTarget.value);
  };
  const handleText = (e) => {
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
      <h1> 🎄 Regalos 🎄 </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleText}
          type="text"
          placeholder="Ingrese un regalo 👩‍💻"
          value={input}
        />
        <input onChange={handleQuantity} type="number" value={quantity} />
        <button type="submit">➕</button>
      </form>
      {gifts.length > 0 ? (
        <ul>
          {gifts.map(({ id, description, quantity }) => (
            <li key={id}>
              🎁 x{quantity} {description}
              <button onClick={() => handleDelete(id)}>❌</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>¡Agrega un regalo a la lista!</p>
      )}
      <button className="btn-delete" onClick={handleDeleteAll}>
        Limpiar Todo 🧹
      </button>
    </div>
  );
};
