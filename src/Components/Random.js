import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const API_Key = process.env.REACT_APP_API_KEY;

function Random(props) {
  const [gif, setGif] = useState({});
  const [error, setError] = useState(null);

  const getdata = useCallback(async () => {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
      const response = await axios.get(url);
      // console.log("response", response.data.data.images);
      const finalData = response.data.data;
      const loadedData = {
        id: finalData.id,
        title: finalData.title,
        image: finalData.images.original.url,
      };
      setGif(loadedData);
    } catch (error) {
      setError(error);
    }
  }, []);
  // useEffect
  useEffect(() => {
    // console.log("useEffect");
    getdata();
  }, [getdata]);

  function handleClick(){
    getdata()
  }

  // use should give function dependency in useEffect bcoz it is a cleaner way that shows if function changes than useeffect can also rerun and function can chnge if it will be using some external state
  return <div className="container">
    <h1>Random Gif</h1>
    {error && <h1>{error}</h1>}
    {!error && <img src={gif.image} style={{width:"500px", height:"300px"}} alt={gif.title} />}
    <button onClick={handleClick}>Change Gif</button>
  </div>;
}

export default Random;
