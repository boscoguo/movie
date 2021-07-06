import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovie } from "../../../action/movieAction";
import "./searchBar.scss";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    document.onkeydown=function(e){
        if(e.key === "Enter"){
            dispatch(getMovie(1, name))
        }  
    } 
    
    return (
        <div className="search">
            <input className="search__input" type="text" onChange={handleChange} placeholder="Search movies" />
        </div>
    )
}

export default SearchBar;