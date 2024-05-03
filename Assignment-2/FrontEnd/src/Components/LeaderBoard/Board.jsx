import React from 'react';
import '../style.css';
import gold from "../../Images/gold.jpg";
import silver from "../../Images/silver.jpg";
import bronze from "../../Images/bronze.jpg";

const Board = ({ scores }) => {
  const sortedScores = [...scores].sort((a, b) => b.studentScore - a.studentScore);

  return (
    <div>
      {sortedScores.map((value, index) => (
        <div
          className={`grid row ${index % 2 === 0 ? "even" : ""}`}
          key={value._id}
          style={{ margin: "50px 0px" }}
        >
          <div className="rank" style={{ fontSize: "1.5rem", marginRight: "10px" }}>
            {index < 3 ? (
              <img
                src={index === 0 ? gold : index === 1 ? silver : bronze}
                alt={`Rank ${index + 1}`}
                style={{ width: "40px", height: "40px" }}
              />
            ) : (
              index + 1
            )}
          </div>
          <div className="details-wrap">
            <div className="badge .badge-6377">
              <img src={value.image} alt="" />
            </div>
            <div className="intern-name">{value.teamName}</div>
            <div className="city">{value.city}</div>
            <div className="scoring">

            </div>
          </div>
          <div className="games-played" style={{ fontSize: "1.5rem" }}>{value.gamesPlayed}</div>
          <div className="score">+{value.studentScore}</div>
        </div>
      ))}
    </div>
  );
};

export default Board;
