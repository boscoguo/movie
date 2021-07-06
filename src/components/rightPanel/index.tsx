import React from "react";
import { useSelector } from "react-redux";
import MovieDetail from "./movieDetail/MovieDetail";
import { RootStore } from "../../store/store";
import "./rightPanel.scss";

const RightPanel = () => {
    const movieDetail = useSelector((state: RootStore) => state.movieDetail);

    return (
        <div className="right">
            {movieDetail.movieDetail&&<MovieDetail props={movieDetail.movieDetail}/>}
        </div>
    )
}

export default RightPanel;
