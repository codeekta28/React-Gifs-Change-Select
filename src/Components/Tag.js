import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
function Tag() {
  const [error, setError] = useState(null);
  const [tag, setTag] = useState("Dogs");
  const [gif, setGif] = useState("");
  const tagData = useCallback(async (tag) => {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const response = await axios.get(url);
      console.log("Tag response", response.data.data.images.original.url);
      const finalData = response.data.data.images.original.url;
      setGif(finalData);
    } catch (error) {
      setError(Error);
    }
  }, []);
  useEffect(() => {
    tagData(tag);
  }, [tagData]);
  function handleChange(e) {
    setTag(e.target.value);
  }
  function handleClick(e) {
console.log("clicked");
    tagData(tag);
   
  }
  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      {error && <h1>{error}</h1>}
      {!error && <img src={gif} style={{width:"500px",height:"300px"}} alt="gif images"/>}
      {!error && <input onChange={handleChange} value={tag} type="text" />}
      {!error && <button onClick={handleClick}>Search</button>}
    </div>
  );
}

export default Tag;
