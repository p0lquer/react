import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dino } from "../types.tsx";

export default function Dinosaur() {
  const { selectedDino } = useParams();
  const [dino, setDino] = useState<Dino>({ name: "", description: "" });

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs${selectedDino}`);
      const dinoData = (await response.json()) as Dino;
      setDino(dinoData);
    })();
  }, [selectedDino]);

  return (
    <div>
      <h1>{dino.name}</h1>
      <p>{dino.description}</p>
      <Link to="/">Back to the list</Link>
    </div>
  );
}
