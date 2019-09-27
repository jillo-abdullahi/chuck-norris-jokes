import axios from 'axios';
import {
    GET_JOKE_STARTED,
    GET_JOKE_SUCCESS,
    GET_JOKE_FAILED
} from './types';


const getJoke = (category) => {
    return (dispatch) => {
        dispatch(getJokeStarted);

        let url = '';

        if (category === 'nerdy' || category === 'explicit') {
            url = `http://api.icndb.com/jokes/random/limitTo=${[category]}`;
        } else {
            url = `http://api.icndb.com/jokes/${category}`;
        }

        axios.get(url)
        .then(response => {
            dispatch(getJokeSuccess(response.data));
        })
        .catch(error => {
            dispatch(getJokeFailed(error.message));
        })
    }

}
const getJokeStarted = () => {
    return {
        type: GET_JOKE_STARTED
    }
};

const getJokeSuccess = (joke) => {
    return {
        type: GET_JOKE_SUCCESS,
        payload: {
            ...joke
        }
    }
}

const getJokeFailed = (error) => {
    return {
        type: GET_JOKE_FAILED,
        payload: error
    }
}

export default getJoke;