import axios from "axios";

const BASE_URL = 'http://localhost:8080';

const fetchProducts = () => {
    return axios(`${BASE_URL}/products`);
}

export default fetchProducts;