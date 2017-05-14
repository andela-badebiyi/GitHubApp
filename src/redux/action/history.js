export function addHistory(user) {
    return {
        type: 'ADD_USER_TO_HISTORY',
        user
    };
}

export function removeHistory(username) {
    return {
        type: 'DELETE_USER_FROM_HISTORY',
        username
    }
}