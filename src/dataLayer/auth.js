module.exports = {
    createAccount: function createAccount(email, password) {
        fetch('/api/users', {
            method: 'POST',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ email, password })
        })
    },
    login: function login(email, password) {
        fetch('/api/login', {
            method: 'POST',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ email, password })
        })
    }
};