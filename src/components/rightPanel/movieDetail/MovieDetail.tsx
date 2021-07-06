import React from "react";
import "./movieDetail.scss";

interface MovieDetailProps {
    props: any
}
const MovieDetail = ({ props }: MovieDetailProps) => {
    const { Title, Genre, Plot, Language, Director, Actors, Runtime, Poster } = props;

    return (
        <div className="detail">
            <div className="detail__left">
                <h1>{Title}</h1>
                <p>{Genre}</p>
                <p>{Plot}</p>
                <p><strong>Language:</strong>{Language}</p>
                <p><strong>Director:</strong>{Director}</p>
                <p><strong>Actors:</strong>{Actors}</p>
                <p><strong>Duration:</strong>{Runtime}</p>
            </div>
            <div className="detail__right">
                <img src={Poster} alt="poster loss" />
            </div>
        </div>
    )
}

export default MovieDetail;