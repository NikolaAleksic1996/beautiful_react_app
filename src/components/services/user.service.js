import api from './api';
import authHeader from "./auth-header";

export const getUser = async () => {
    return await api.get('/user', {headers: authHeader()})
}