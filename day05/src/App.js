import { useState } from "react";
import "./App.css";
export const App = () => {
  const [gifts, setGifts] = useState([{ id: 1, description: "Comida" }]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleDelete = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGifts([...gifts, { id: gifts.length + 1, description: input }]);
    setInput("");
  };

  const handleDeleteAll = () => {
    setGifts([]);
  };

  return (
    <div className="content">
      <h1>Regalos:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserte un regalo"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {gifts.map(({ id, description }) => (
          <li key={id}>
            {description} <button onClick={() => handleDelete(id)}>X</button>
          </li>
        ))}
      </ul>
      <button className="btn-delete" onClick={handleDeleteAll}>
        Borrar Todo
      </button>
    </div>
  );
};
