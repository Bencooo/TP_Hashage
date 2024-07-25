// src/services/userService.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Utilisez le proxy
});

export const subscribe = async (): Promise<string> => {
  const response = await apiClient.post('/subscribe');
  return response.data.address;
};

