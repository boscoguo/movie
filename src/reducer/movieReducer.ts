import { MovieDispatchTypes, MovieType, MOVIE_SUCCESS, MOVIE_FAIL, MOVIE_LOADING } from "../action/movieActionType";

interface DefaultStateI {
    loading: boolean,
    movie?: MovieType,
    page?: 1, 
    title?: string,
}
const defaultState: DefaultStateI = {
    loading: false
};

const movieReducer = (state: DefaultStateI = defaultState, action: MovieDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case MOVIE_FAIL:
            return {
                loading: false,
            }
        case MOVIE_LOADING:
            return {
                loading: true,
            }
        case MOVIE_SUCCESS:
            const {inputTitle, data} = action.payload;
            return {
                loading: false,
                movie: action.payload,
                page: 1,
                title: inputTitle
            }
        default:
            return state
    }
    return state
}

export default movieReducer;