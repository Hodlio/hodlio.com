export function set(key, value) {
    if(typeof window.localStorage === 'object') {
        window.localStorage.setItem(key, value);
    }
}

export function get(key) {
    if(typeof window.localStorage === 'object') {
        return window.localStorage.getItem(key);
    }

    return null;
}