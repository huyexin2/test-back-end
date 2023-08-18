import axios from "axios";
import * as placeDao from "./places/places-dao.js";

export const check_id = async () => {
    const response = await fetch(`http://localhost:4000/api/places`).then(response => response.json())
    const place_id = response[0].placeFound.place_id;
    const placeInfo = await placeDao.extractPlace(place_id);
    console.log(place_id)
}



