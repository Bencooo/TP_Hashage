// src/services/userService.ts
import { apiClient } from './api.service';

export const subscribe = async (): Promise<string> => {
    const response = await apiClient.post('/subscribe');
    return response.data.address;
};
