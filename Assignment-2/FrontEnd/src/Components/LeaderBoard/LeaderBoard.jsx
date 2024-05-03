import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';
import '../style.css';

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/get');
      setScores(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect to fetch initial data and refresh every 5 seconds
  useEffect(() => {
    fetchData(); // Fetch initial data
    // Refresh data after every 10 seconds
    const intervalId = setInterval(fetchData, 5000);
    // clear function to clear interval
    return () => clearInterval(intervalId);
  }, []);


  
  return (
    <div>
      <div className="header">
        <div className="heading-with-subtitle">
          <div className="wrap">
            <h2 className="title">Score Board</h2>
            <p className="sub-title">
              Welcome to our scoreboard page! Witness gaming greatness in real-time with the top players and epic
              achievements. Stay tuned for non-stop excitement!
            </p>
          </div>
        </div>
      </div>
      <div className="leaderboard">
        <div className="wrap">
          <div>
            <div className="grid heading">
              <div className="th">Rank</div>
              <div className="th">Name</div>
              <div className="th">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div className="th">Total Games Played</div>
              <div className="th">Score</div>
            </div>
          </div>
          <Board scores={scores}/>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
