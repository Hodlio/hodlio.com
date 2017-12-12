module.exports = {
    fetchDashboard: function fetchDashboard() {
        return fetch('/api/dashboard', {
            method: 'GET',
            credentials: 'same-origin'
        })
        .then((response) => response.json());
    }
};