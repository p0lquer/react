import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

const Dinosaur = () => {

const {id} = useParams();
const [dino, setDino] = useState({});
useEffect(() => {
    fetch(`http://localhost:8000/api/dinos/${id}`)
    .then(async (res) => await res.json())
    .then ((json) => setDino(json));

}, []);
return (
    <div>
        <h1>{dino.name}</h1>
        <p>
            {dino.description}
        </p>
        <Link to ="/" >Back to all dinosaurs</Link>
    </div>
)
}

export default Dinosaur;
