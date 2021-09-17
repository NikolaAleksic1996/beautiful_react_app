import api from './api';

export const signUp = async (name, surname, username, password) => {
    const {data} = await api.post('/register', {name, surname, username, password});
    //const {user, token} = data;

    //localStorage.setItem('tokens', JSON.stringify(token))

    return data;
};

export const login = async (email, password) => {

    const {data} = await api.post('/login', {
        email, password
    });

    if (data.accessToken) {
        localStorage.setItem("user", JSON.stringify(data));
    }

    return data;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
