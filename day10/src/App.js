import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [gifts, setGifts] = useState(
    JSON.parse(localStorage.getItem("gifts")) || []
  );
  const [inputQuantity, setInputQuantity] = useState(1);
  const [inputUrl, setInputUrl] = useState("");

  const handleDeleteAll = () => {
    setGifts([]);
  };
  const handleDelete = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputText ||
      !inputUrl ||
      gifts.find((gift) => gift.description === inputText)
    ) {
      alert("El regalo ni la imagen pueden estar vacios o estar repetidos");
      return;
    }
    const newGift = {
      id: uuid(),
      description: inputText,
      quantity: inputQuantity,
      url: inputUrl,
    };
    setGifts([...gifts, newGift]);
    setInputText("");
    setInputUrl("");
  };

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(gifts));
    return;
  }, [gifts]);

  const handleInputText = (e) => {
    setInputText(e.currentTarget.value);
  };
  const handleInputUrl = (e) => {
    setInputUrl(e.currentTarget.value);
  };
  const handleInputQuantity = (e) => {
    setInputQuantity(e.currentTarget.value);
  };

  return (
    <div className="content">
      <h1>🎄 Regalos 🎄</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese un regalo 👩‍💻"
          onChange={handleInputText}
          value={inputText}
        />
        <input
          type="number"
          value={inputQuantity}
          onChange={handleInputQuantity}
        />
        <input
          placeholder="📸"
          type="url"
          value={inputUrl}
          onChange={handleInputUrl}
        />
        <button type="submit">➕</button>
      </form>
      {gifts.length > 0 ? (
        <ul>
          {gifts.map(({ id, description, quantity, url }) => (
            <li key={id}>
              🎁x{quantity}{" "}
              <img width="35px" height="35px" alt={description} src={url}></img>{" "}
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
