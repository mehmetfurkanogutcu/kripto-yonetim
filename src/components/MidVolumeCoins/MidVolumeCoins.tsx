// MidVolumeCoins.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Coin {
  symbol: string;
  priceChangePercent: string;
  lastPrice: string;
  quoteVolume: string;
}

const MidVolumeCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [size, setSize] = useState("5");

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  const fetchCoins = () => {
    axios
      .get("https://api.binance.com/api/v3/ticker/24hr")
      .then((response) => {
        const filteredData = response.data.filter(
          (coin: Coin) =>
            coin.symbol.endsWith("USDT") &&
            parseFloat(coin.quoteVolume || "0") > 0
        );
        const sortedData = filteredData.sort(
          (a: Coin, b: Coin) =>
            parseFloat(a.quoteVolume || "0") - parseFloat(b.quoteVolume || "0")
        );
        const midStart = Math.floor((sortedData.length - parseInt(size)) / 2);
        const midEnd = midStart + parseInt(size);
        setCoins(sortedData.slice(midStart, midEnd));
      })
      .catch((error) => console.error(error));
  };

  useEffect(fetchCoins, [size]);

  return (
    <List className="dashboard-box p-3 shadow mb-3 bg-white rounded">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Button onClick={fetchCoins}>Orta Hacimli Coinler</Button>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Göster</InputLabel>
          <Select value={size} label="Göster" onChange={handleChange}>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="25">25</MenuItem>
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="35">35</MenuItem>
            <MenuItem value="40">40</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </Select>
        </FormControl>
      </div>
      {coins.map((coin, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index + 1}</ListItemIcon>
            <ListItemText
              primary={coin.symbol}
              secondary={`Price: $${coin.lastPrice || "0"}, Volume: $${
                coin.quoteVolume || "0"
              }`}
            />
            <ListItemText>
              <span
                style={{
                  backgroundColor:
                    parseFloat(coin.priceChangePercent) < 0 ? "red" : "green",
                  color: "white",
                  padding: "5px 5px",
                }}
              >
                {coin.priceChangePercent} %
              </span>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MidVolumeCoins;
