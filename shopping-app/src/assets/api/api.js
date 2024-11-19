import axios from 'axios';
import { API_BASE_URL } from './config';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/shopping`,
});

// Fetch all shopping items
export const getAllItems = async () => api.get('/');

// Fetch a single item by name
export const getItemByName = async (name) => api.get(`/${name}`);

// Add a new shopping item
export const addItem = async (item) => api.post('/', item);

// Update an existing item
export const updateItem = async (name, updatedItem) => api.put(`/${name}`, updatedItem);

// Delete an item
export const deleteItem = async (name) => api.delete(`/${name}`);