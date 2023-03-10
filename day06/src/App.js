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
      <h1>π Regalos π</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            placeholder="Inserte un regalo π©βπ»"
            onChange={handleChange}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
      {gifts.length > 0 ? (
        gifts.map((gift) => (
          <li key={gift.id}>
            π {gift.description}
            <button onClick={() => handleDeleteItem(gift.id)}>β</button>
          </li>
        ))
      ) : (
        <p>Β‘Agrega un regalo a la lista!</p>
      )}
      <button className="btn-delete" onClick={handleDeleteAll}>
        Limpiar Todo π§Ή
      </button>
    </div>
  );
};
