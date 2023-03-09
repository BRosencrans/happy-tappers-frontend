const URL_PREFIX = "https://localhost:3001";

const API = {
    getAllScores: () => {
        return fetch(`${URL_PREFIX}/api/scores`).then((res) => res.json());
    },
    getUserData: (id) => {
        return fetch(`${URL_PREFIX}/api/users/${id}`).then((res) => res.json());
    },
    login: (userObj) => {
        return fetch(`${URL_PREFIX}/api/users/login`);
    },
    signup: (userObj) => {
        return fetch(`${URL_PREFIX}/api/users/signup`);
    },
    addScore: (userObj) => {
        return fetch;
    },
};

export default API;
