import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";
import "./container.scss";

const Container = () => {
    const searchState = useSelector((state: RootStore) => state.movie.movie?.data.Search);
    return (
        <div className="containter" style={searchState ? {} : {height: "100vh"}}>
            <Router>
                <LeftPanel />
                <RightPanel />
            </Router>
        </div>
    )
}

export default Container;