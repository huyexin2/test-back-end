import posts from "./places.js";
let places = posts;
import axios from "axios";

const createPlaces = async (req, res) => {
    const newPlace = req.body;
    places.push(newPlace);
    res.json(newPlace);
}

const findPlaces  = (req, res) => { res.json(places);}


export default (app) => {
    app.post('/api/places', createPlaces);
    app.get('/api/places', findPlaces);
}

