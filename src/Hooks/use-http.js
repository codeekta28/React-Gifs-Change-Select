import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function useHttp(tag) {
  const [error, setError] = useState(null);
  const [gif, setGif] = useState("");
  const tagData = useCallback(async (tag) => {
    try {
        const gifUrl=tag?`${url}&tag=${tag}`:url;
      const response = await axios.get(gifUrl);
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
return {gif,tagData,error}
}

export default useHttp;
