import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dino } from "../types.tsx";

export default function Index() {
  const [dinos, setDinos] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/dinos");
      const allDinos = (await response.json()) as Dino[];
      setDinos(allDinos);
    })();
  }, []);

  return (
    <main>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      {dinos.map((dinosaur: Dino) => {
        return (
          <Link
            to={`/${dinosaur.name.toLocaleLowerCase()}`}
            key={dinosaur.name}
            className="dinosaur"
          >
            {dinosaur.name}
          </Link>
        );
      })}
    </main>
  );
}
