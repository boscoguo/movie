import React from "react";
import "./card.scss";
import { start } from "../../../../assests/images";

interface CardProps {
  title: string;
  year: string;
  id: string;
  index: number;
  card: any[];
}
const Card = ({ title, year, id, index, card }: CardProps) => {
  return (
    <div className="card">
      <div className="card__top">
        <p className="card__top-title">{title}</p>
        {card && (
          <div
            className={
              card[index].isActive
                ? "card__top-label show"
                : "card__top-label hidden"
            }
          >
            <img src={start} alt="star loss" />
          </div>
        )}
      </div>
      <p className="card__year">{year}</p>
    </div>
  );
};

export default Card;
