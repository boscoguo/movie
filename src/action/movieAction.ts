import { Dispatch } from "redux";
import { MovieDispatchTypes, MovieDetailsDispatchTypes, MOVIE_SUCCESS, MOVIE_FAIL, MOVIE_LOADING, MOVIE_DETAIL_LOADING, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAIL, SET_MOVIE_ID } from "./movieActionType";
import axios from "axios";


export const getMovie = (page: number, title: string) => async (dispatch: Dispatch<MovieDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIE_LOADING
        })
        const res = await axios.get(`https://omdbapi.com/?apikey=2edf5c13&s=${title}&page=${page}&type=movie`)
        dispatch({
            type: MOVIE_SUCCESS,
            payload: {data: res.data, inputTitle: title} 
        })
    } catch (e) {
        dispatch({
            type: MOVIE_FAIL
        })
    }
}


export const getMovieDetails = (id: string) => async (dispatch: Dispatch<MovieDetailsDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIE_DETAIL_LOADING
        })
        const res = await axios.get(`https://omdbapi.com/?apikey=2edf5c13&i=${id}&plot=full`)
        dispatch({
            type: MOVIE_DETAIL_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: MOVIE_DETAIL_FAIL
        })
    }
} 

export const setMovieId = (id:string) => async(dispatch: Dispatch<MovieDetailsDispatchTypes>) => {
    dispatch({
        type: SET_MOVIE_ID,
        payload: {id}
    })
} 

