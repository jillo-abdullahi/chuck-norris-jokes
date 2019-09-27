import {
    GET_JOKE_STARTED,
    GET_JOKE_SUCCESS,
    GET_JOKE_FAILED
} from '../actions/types';

const initialState = {
    joke: [],
    loading: false,
    error: null,
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_JOKE_STARTED:
            return {
                ...state,
                loading: true }
        case GET_JOKE_SUCCESS:
            return {
                    ...state,
                    joke: action.payload,
                    loading: false
                    }
        case GET_JOKE_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default reducer;