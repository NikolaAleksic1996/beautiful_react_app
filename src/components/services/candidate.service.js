import api from './api';
import authHeader from "./auth-header";

export const getAllCandidates = () => {
    return api.get('employee/list', {headers: authHeader()});
}