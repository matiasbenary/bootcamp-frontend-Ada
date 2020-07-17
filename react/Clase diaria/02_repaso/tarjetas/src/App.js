import React from "react";
import Card from "./componets/Cards/Card";

function App() {
  const cards = [
    {
      id: 1,
      title: "Soy el primero",
      footer: "Soy el primero",
      color: "#2a9d8f",
    },
    {
      id: 2,
      title: "Soy el segundo",
      footer: "Soy el segundo",
      color: "#e9c46a",
    },
    {
      id: 3,
      title: "Soy el tercero",
      footer: "Soy el tercero",
      color: "#f4a261",
    },
  ];

  return (
    <div>
      {cards.map((card) => {
        return (
          <Card
            key={`${card.id}-card`}
            title={card.title}
            footer={card.footer}
            color={card.color}
          >
            Holaa
          </Card>
        );
      })}
    </div>
  );
}

export default App;
