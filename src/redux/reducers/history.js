export default function history(state=[], action) {
    switch (action.type) {
        case 'ADD_USER_TO_HISTORY':
            console.log('adding user to history');
            return state;
        case 'DELETE_USER_FROM_HISTORY':
            console.log('deleting user from history');
            return state;
        default:
            return state;
    }
}