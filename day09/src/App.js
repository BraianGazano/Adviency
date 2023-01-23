import "./App.css";

import React, { useState } from "react";

export const App = () => {
  const [gifts, setGifts] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputQuantity, setQuantity] = useState(1);
  const [inputUrl, setUrl] = useState("");

  const handleText = (e) => {
    setInputText(e.currentTarget.value);
  };
  const handleDeleteAll = () => {
    setGifts([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputText ||
      !inputUrl ||
      gifts.find((gift) => gift.description === inputText)
    ) {
      alert(
        "El regalo ni la imagen pueden ser vacios o estar repetidos en la lista"
      );
      return;
    }
    const newGift = {
      id: gifts.length + 1,
      description: inputText,
      quantity: inputQuantity,
      url: inputUrl,
    };
    setGifts([...gifts, newGift]);
    setInputText("");
  };
  const handleDelete = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };

  const handleQuantity = (e) => {
    setQuantity(e.currentTarget.value);
  };

  const handleUrl = (e) => {
    setUrl(e.currentTarget.value);
  };

  return (
    <div className="content">
      <h1>🎄 Regalos 🎄</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese un regalo 👩‍💻"
          value={inputText}
          onChange={handleText}
        />
        <input onChange={handleQuantity} type="number" value={inputQuantity} />
        <input
          onChange={handleUrl}
          type="url"
          value={inputUrl}
          placeholder="Imagen"
        />
        <button type="submit">➕</button>
      </form>
      {gifts.length > 0 ? (
        <ul>
          {gifts.map(({ id, description, quantity, url }) => (
            <li key={id}>
              🎁x{quantity}{" "}
              <img alt={description} src={url} width="40px" height="40px" />{" "}
              {description} <button onClick={() => handleDelete(id)}>❌</button>
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
