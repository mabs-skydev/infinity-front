import axios from 'axios';

const apiEndPoint = "http://localhost:8000/api";

export async function registerUser(user) {
    const {data} = await axios.post(`${apiEndPoint}/register`, user);
    localStorage.setItem('token', data.token);
}

export async function loginUser(user) {
    const {data} = await axios.post(`${apiEndPoint}/login`, user);
    localStorage.setItem('token', data.token);
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location = "/login";
}

export function getCurrentUser() {
    return localStorage.getItem('token');
}

export async function getUserInfo() {
    if (!localStorage.getItem('user')) {
        const {data} = await axios.get(`${apiEndPoint}/user`, {
                                headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
                            });
        localStorage.setItem('user', data.user.id);
    }
}