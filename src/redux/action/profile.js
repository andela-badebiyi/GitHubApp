import axios from 'axios';
export function saveProfile(payload) {
    return {
        type: 'SAVE_CURRENT_PROFILE',
        payload
    };
}

export function invalidProfile() {
    return {
        type: 'INVALID_PROFILE'
    }
}

export function profileValid() {
    return {
        type: 'PROFILE_VALID'
    }
}

export function loading() {
    return {
        type: 'LOADING'
    };
}

export function loadingCompleted() {
    return {
        type: 'NOT_LOADING'
    };
}

export function fetchProfile(username, nav) {
    const request = axios.get(`https://api.github.com/users/${username}`);

    return (dispatch, ownProps) => {
        console.log('this is own props', ownProps().profile)
        request.then(response => {
            dispatch(loadingCompleted());
            dispatch({
                type: 'SAVE_CURRENT_PROFILE',
                payload: response.data
            });
            nav.navigate('Profile');
        }).catch(err => {
            dispatch(loadingCompleted());
            dispatch({
                type: 'ERROR_FETCHING_PROFILE',
                payload: err.status
            });
        });
    }
}