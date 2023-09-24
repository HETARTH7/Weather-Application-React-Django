import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/?city=${city}`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={fetchData}>
        <input onChange={onChangeCity} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
