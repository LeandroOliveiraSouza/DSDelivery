import axios from "axios";

const API_URL = "http://172.24.77.178:8080";

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}
