import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../../../action/movieAction";
import { RootStore } from "../../../store/store";
import "./bottomPart.scss";
import { arrowLeft, arrowRight } from "../../../assests/images";


const BottomPart = () => {
    let num:number;
    let [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const bottomState = useSelector((state: RootStore) => state.movie.movie?.data.totalResults);
    const titleState = useSelector((state: RootStore) => state.movie.title);

    const handleLeft = () => {
        if (page && page > 1) {
            page--;
            num = page;
            setPage(num);
            if (titleState) dispatch(getMovie(page--, titleState))
        }
    }
    const handleRight = () => {
        if (page && bottomState && page <= Number(bottomState)/10 ) {
            page++;  
            num = page;
            setPage(num);
            if (titleState) dispatch(getMovie(page++, titleState))
        }
    }
    return (
        <>
            {bottomState ? <div className="bottom">
                <div className="bottom__left" onClick={handleLeft}>
                    <img src={arrowLeft} alt="arrow loss" />
                </div>
                <div className="bottom__center">
                    <p>page {page}</p>
                    <p>{bottomState} results</p>
                </div>
                <div className="bottom__right" onClick={handleRight}>
                    <img src={arrowRight} alt="arrow loss" />
                </div>
            </div> : null}
        </>
    )
}

export default BottomPart;