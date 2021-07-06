import React from "react";
import SearchBar from "./searchBar";
import CardsContainer from "./cardsContainer";
import BottomPart from "./bottomPart";
import "./leftPanel.scss";


const LeftPanel = () => {
    return (
        <div className="left">
            <SearchBar />
            <CardsContainer />
            <BottomPart />
        </div>
    )
}
export default LeftPanel;