import "./card.css";
import { useState, useEffect } from "react";
import Dice from "./Dice";
import axios from "axios";
import Divider from "../images/pattern-divider-desktop.svg";
function Card() {
  const [quote, setQuote] = useState("");
  const [id, setId] = useState();
  const url = "https://api.adviceslip.com/advice";
  const getQuote = async () => {
    const res = await axios.get(url);
    setQuote(res.data.slip.advice);
    setId(res.data.slip.id);
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="card">
      <p>Advice #{id}</p>
      <h3>"{quote}"</h3>
      <div className="wrap">
        <img src={Divider} alt="divider" className="divider" />
        <Dice onClick={getQuote} />
      </div>
    </div>
  );
}

export default Card;
