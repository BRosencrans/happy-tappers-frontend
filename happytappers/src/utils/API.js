const URL_PREFIX = "http://localhost:3001";

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
        return fetch(`${URL_PREFIX}/api/scores/`);
    },
    retrieveLeaderboard: () => {
        return fetch(`${URL_PREFIX}/api/scores/`);
    },
    isValidToken: (token) => {
        return fetch(`${URL_PREFIX}/api/users/isValidToken`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    },
};

export default API;
