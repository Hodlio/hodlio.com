module.exports = {
    createAccount: function createAccount(email, password) {
        return fetch('/api/users', {
            method: 'POST',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ email, password })
        });
    },
    login: function login(email, password) {
        return fetch('/api/login', {
            method: 'POST',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ email, password })
        });
    }
};