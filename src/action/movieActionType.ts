export const MOVIE_LOADING = "MOVIE_LOADING";
export const MOVIE_FAIL = "MOVIE_FAIL";
export const MOVIE_SUCCESS = "MOVIE_SUCCESS";
export const MOVIE_DETAIL_LOADING = "MOVIE_DETAIL_LOADING";
export const MOVIE_DETAIL_SUCCESS = "MOVIE_DETAIL_SUCCESS";
export const MOVIE_DETAIL_FAIL = "MOVIE_DETAIL_FAIL";
export const SET_MOVIE_ID = "SET_MOVIE_ID";

export type MovieType = {
    data: {
        Search: MovieSearch[],
        totalResults: MovieTotalResults,
    },
    inputTitle: string
}

export type MovieDetailType = {
    Title: string,
    Genre: string,
    Plot: string,
    Language: string,
    Director: string,
    Actors: string,
    Poster?: string,
    Runtime: string,
    imdbID: string,

}

export type PageType = {
    page: number
}

export type MovieSearch = {
    Title: string,
    imdbID: string,
    Year: string
}

export type MovieTotalResults = {
    totalResults: string
}

export type MovieTitle = {
    title: string
}

export type MoiveId = {
    id: string
}


export interface MovieLoading {
    type: typeof MOVIE_LOADING
}

export interface MovieFail {
    type: typeof MOVIE_FAIL
}

export interface MovieSuccess {
    type: typeof MOVIE_SUCCESS,
    payload: MovieType
}

export interface MovieDetailLoading {
    type: typeof MOVIE_DETAIL_LOADING
}

export interface MovieDetailFail {
    type: typeof MOVIE_DETAIL_FAIL
}

export interface MovieDetailSuccess {
    type: typeof MOVIE_DETAIL_SUCCESS,
    payload: MovieDetailType
}

export interface SetMoiveId {
    type: typeof SET_MOVIE_ID,
    payload: MoiveId
}


export type MovieDispatchTypes = MovieLoading | MovieFail | MovieSuccess

export type MovieDetailsDispatchTypes = MovieDetailLoading | MovieDetailFail | MovieDetailSuccess | SetMoiveId

