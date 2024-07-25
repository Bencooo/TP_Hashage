import axios from 'axios';
import { User } from '../models/User.model';

const apiClient = axios.create({
  baseURL: '/api', // Utilisez le proxy
});

export const subscribe = async (user: User): Promise<string> => {
  const response = await apiClient.post('/subscribe', user);
  return response.data.address;
};
