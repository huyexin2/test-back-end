import posts from "./places.js";
let places = posts;
import axios from "axios";

const createPlaces = async (req, res) => {
    const newPlace = req.body;
    console.log(newPlace)
    places.push(newPlace);
    res.json(newPlace);
}

const findPlaces  = (req, res) => { res.json(places);}

const deletePlaces = (req, res) => {
    const placeToDelete = req.params.status;
    places = places.filter((t) =>
        t.status !== placeToDelete);
    res.sendStatus(200);

}


export default (app) => {
    app.post('/api/places', createPlaces);
    app.get('/api/places', findPlaces);
    app.delete('/api/places/:status', deletePlaces);
}

