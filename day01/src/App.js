import { useState } from "react";
import "./App.css";

function App() {
  const [gifts, setGifts] = useState(["Medias", "Caramelos", "Vitel Tone"]);
  return (
    <div className="App">
      <h1>Regalos:</h1>
      <ul>
        {gifts.map((gift) => (
          <li key={gift}>{gift}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
