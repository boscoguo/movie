import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../../store/store";
import Card from "./card/Card";
import { setMovieId, getMovieDetails } from "../../../action/movieAction";
import { Link } from "react-router-dom";
import "./cardsContainer.scss";

const CardsContainer = () => {
    const searchState = useSelector((state: RootStore) => state.movie.movie?.data.Search);
    const searchLoading = useSelector((state: RootStore) => state.movie.loading);
    const dispatch = useDispatch();
    const handleClick = (id: string) => {
        dispatch(setMovieId(id));
        dispatch(getMovieDetails(id));
        labelSelectedMovie(id);
    }

    const setCurrentItemArr = () => {
        if (searchState !== undefined) {
            const currentArr = searchState?.map((item) => {
                const obj = { id: "", isActive: false };
                obj.id = item.imdbID;
                return obj;
            })
            return currentArr;
        }
    }
    const labelSelectedMovie = (id: string) => {
        if (card !== undefined) {
            const copiedCard = [...card];
            const currentItems = copiedCard?.map((item, index) => {
                if (item.id !== id) {
                    return {
                        ...item,
                        isActive: false
                    }
                }
                return {
                    ...item,
                    isActive: true
                }
            })
            setCard(currentItems);
        }
    }

    const currentItems = setCurrentItemArr();
    const [card, setCard] = useState(currentItems);

    useEffect(() => {
        if (!card && currentItems) {
            setCard(currentItems);
        }
    }, [])

    console.log("card", card);



    return (
        <div className="cards">
            {searchState ? searchState.map((item, index) => {
                const { Title, imdbID, Year } = item;
                return (
                    <Link to={`/${imdbID}`} key={index}>
                        <div onClick={() => handleClick(imdbID)}>
                            <Card title={Title} year={Year} id={imdbID} index={index} card={card}/>
                        </div>
                    </Link>
                )
            }) : searchLoading ? "Loading..." : "no results"}
        </div>
    )
}

export default CardsContainer;