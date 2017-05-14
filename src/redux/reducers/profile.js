export default function profile(state=[], action) {
    switch(action.type) {
        case 'SAVE_CURRENT_PROFILE':
            return Object.assign({}, state, Object.assign({}, state.profile, { user: action.payload }));
        case 'ERROR_FETCHING_PROFILE':
            return Object.assign({}, state, Object.assign({}, state.profile, { notFound: true }));
        case 'INVALID_PROFILE':
            return Object.assign({}, state, Object.assign({}, state.profile, { usernameInvalid: true }));
        case 'PROFILE_VALID':
            return Object.assign({}, state, Object.assign({}, state.profile, { usernameInvalid: false }));
        case 'LOADING':
            return Object.assign({}, state, Object.assign({}, state.profile, { loading: true }));
        case 'NOT_LOADING':
            return Object.assign({}, state, Object.assign({}, state.profile, { loading: false }));
        

        default: 
            return state;
    }
}