import { useState } from "react";
import "./App.css";

function App() {
  const [gifts, setGifts] = useState([
    {
      description: "Vitel Tone",
      id: 1,
    },
  ]);

  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setGifts([...gifts, { description: input, id: gifts.length + 1 }]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div className="App">
      <h1>Regalos:</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Inserte un regalo"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {gifts.map((gift) => (
          <li key={gift.id}>{gift.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
