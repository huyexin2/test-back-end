
import axios from "axios";

const res = await fetch(`http://localhost:4000/api/places`).then(response => response.json())
console.log(res[0].placeFound.place_id)


// const place_id = await res.json();
// console.log(place_id)
// axios.get(`http://localhost:4000/api/places`).then(function (response)
// {    console.log(response.data[0].placeFound.place_id);  });

// console.log(res.body);