import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  Dataset,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import BuyActionWindow from "./BuyActionWindow";
import { GeneralContext } from "./GeneralContext";

import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  // for the graph 
  const labels = watchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets:[
      {
        label: 'stock price',
        data: watchlist.map((stock)=> stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      borderWidth: 1,
      },
    ]
  }

  const { showBuyWindow, openBuyWindow } = useContext(GeneralContext);
  const [selectedUid, setSelectedUid] = useState(null);

  const handleBuyClick = (uid) => {
    setSelectedUid(uid);
    openBuyWindow();
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem key={index} stock={stock} onBuyClick={handleBuyClick} />
        ))}
      </ul>
      <DoughnutChart data={data}/>
      {showBuyWindow && <BuyActionWindow uid={selectedUid} />}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onBuyClick }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistAction(true)}
      onMouseLeave={() => setShowWatchlistAction(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent" style={{ paddingRight: "0.5rem" }}>
            {stock.percent}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span
            className="price"
            style={{ paddingRight: "0.5rem", paddingLeft: "0.5rem" }}
          >
            {stock.price}
          </span>
        </div>
      </div>
      {showWatchlistAction && (
        <WatchListAction uid={stock.name} onBuyClick={onBuyClick} />
      )}
    </li>
  );
};

const WatchListAction = ({ uid, onBuyClick }) => {
  return (
    <span className="actions">
      <span style={{ display: "flex", alignItems: "center", gap: "1px" }}>
        <Tooltip title="buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => onBuyClick(uid)}>
            buy
          </button>
        </Tooltip>
        <Tooltip title="sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">sell</button>
        </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="more" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
    
  );
};
