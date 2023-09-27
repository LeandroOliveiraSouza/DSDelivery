import axios from "axios";

const BASE_URL = 'http://localhost:8080';
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export function fetchProducts() {
    return axios(`${BASE_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}