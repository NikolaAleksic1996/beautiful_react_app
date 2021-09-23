import api from './api';

export const signUp = async (name, surname, email, password) => {
    const {data} = await api.post('/register', {name, surname, email, password});
    //const {user, token} = data;

    //localStorage.setItem('tokens', JSON.stringify(token))

    return data;
};

export const login = async (email, password) => {

    const data = await api.post('/login', {
        email, password
    });

    localStorage.setItem('token', JSON.stringify(data.data[0]));

    return data;
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
