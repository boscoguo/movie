import { MovieDetailsDispatchTypes, MovieDetailType, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAIL, MOVIE_DETAIL_LOADING, SET_MOVIE_ID } from "../action/movieActionType";

interface DefaultStateI {
    loading: boolean,
    movieDetail?: MovieDetailType,
    selectedMovieId?: string
}
const defaultState: DefaultStateI = {
    loading: false,
};

const movieDetailReducer = (state: DefaultStateI = defaultState, action: MovieDetailsDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case MOVIE_DETAIL_FAIL:
            return {
                loading: false,
            }
        case MOVIE_DETAIL_LOADING:
            return {
                loading: true,
            }
        case MOVIE_DETAIL_SUCCESS:
            return {
                loading: false,
                movieDetail: action.payload,
            }
        case SET_MOVIE_ID: 
            const {id} = action.payload;
            return {
                loading: false,
                selectedMovieId: id,
            }
        default:
            return state
    }
    return state
}

export default movieDetailReducer;