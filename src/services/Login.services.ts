import axios, { type AxiosResponse } from 'axios'
import { API_URL } from '../utils/constans'
export const getLogin = async ({ username, password }: { username: string, password: string }): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(`${API_URL}/login`, { username, password })
    //const response: AxiosResponse<any> = await axios.post(`http://localhost:3000/login`, { username, password })
    return response.data
  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    throw error;
  }
}

