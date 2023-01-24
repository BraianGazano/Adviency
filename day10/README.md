# 🎄 Adviency Dia 10

Este es la resolución del dia 10 correspondiente al desafio diario realizado en React del [Advency](https://twitter.com/goncy/status/1601307100524576769)

## 📖 Consigna

La consigna del desafio fué la siguiente:

Día 10: La gente está triste por que al cerrar la aplicación pierde todos sus regalos 😢. Usemos `localStorage` para guardar los regalos en el dispositivo del usuario y cargarlos cuando vuelve!

## 💡 Resolución

Para su resolución se utilizó hooks de React tales como `useEffect` y `useState` para el manejo de estados asi como tambien el almacenado de los regalos cada vez que se agrega uno nuevo.
Se presentó el inconveniente de que al agregar y borrar algún item de la lista estaba la posibilidad de que varios regalos tuviesen el mismo ID. Por lo tanto se utilizó un paquete externo llamado `uuid` para el control de los mismos.
El resultado final fue el mostrado en la siguiente imagen:

![Dia10](https://www.linkpicture.com/q/Dia-910.png)

## 👷‍♂️ Construido con:

- React

## 🤓 Lo que aprendí

- Pude profundizar en el manejo de estados y los eventos en React mediante hooks.
- Utilizar un paquete externo llamado uuid para el manejo de id's unicos

## 🙋‍♂️ Autor:

- Linkedin - [Braian Gazano](https://www.linkedin.com/in/braian-gazano/)
- Github - [Braian Gazano](https://github.com/BraianGazano)
