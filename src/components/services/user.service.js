import api from './api';
import authHeader from "./auth-header";

export const getUser = () => {
    return api.get('/user', {headers: authHeader()})
}