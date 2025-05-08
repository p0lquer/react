import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

const Index = () => {
    const [dinos, setDinos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api")
        .then(async (res) => await res.json())
        .then ((json) => setDinos(json));
    }
    , []);

    return (
        <div>
            <h1>Dinosaurs</h1>
            <ul>
                {dinos.map((dino) => (
                    <li key={dino.id}>
                        <Link to={`/dinos/${dino.id}`}>{dino.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/dinos/new">Add a new dinosaur</Link>
        </div>
    )
}

export default Index;