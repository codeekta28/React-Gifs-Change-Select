import React from "react";
import { useState } from "react";
import useHttp from "../Hooks/use-http";

function RandomTag() {
  const [tag, setTag] = useState("Dogs");
  const{gif,tagData,error}=useHttp(tag)
  function handleChange(e) {
    setTag(e.target.value);
  }
  function handleClick(){
   tagData(tag)
  }
  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      {error && <h1>{error}</h1>}
      {!error && (
        <img
          src={gif}
          style={{ width: "500px", height: "300px" }}
          alt="gif images"
        />
      )}
      {!error && <input onChange={handleChange} value={tag} type="text" />}
      {!error && <button onClick={handleClick}>Search</button>}
    </div>
  );
}

export default RandomTag;
