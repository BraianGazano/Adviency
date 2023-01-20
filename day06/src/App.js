import { useState } from "react";
import "./App.css";
export const App = () => {
  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setGifts([...gifts, { id: gifts.length + 1, description: input }]);
    setInput("");
  };
  const handleDeleteAll = () => {
    setGifts([]);
  };

  const handleDeleteItem = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };

  const [gifts, setGifts] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="content">
      <h1>🎄 Regalos 🎄</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            placeholder="Inserte un regalo 👩‍💻"
            onChange={handleChange}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
      {gifts.length > 0 ? (
        gifts.map((gift) => (
          <li key={gift.id}>
            🎁 {gift.description}
            <button onClick={() => handleDeleteItem(gift.id)}>❌</button>
          </li>
        ))
      ) : (
        <p>¡Agrega un regalo a la lista!</p>
      )}
      <button className="btn-delete" onClick={handleDeleteAll}>
        Limpiar Todo 🧹
      </button>
    </div>
  );
};
