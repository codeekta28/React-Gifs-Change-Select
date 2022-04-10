import React from 'react'
import useHttp from '../Hooks/use-http'

function RandomCustom() {
    const{error,gif,tagData}=useHttp()
    function handleClick(){
        tagData()
    }
  return (
   <div className="container">
    <h1>Random Gif</h1>
    {error && <h1>{error}</h1>}
    {!error && <img src={gif} style={{width:"500px", height:"300px"}} alt="random gif" />}
    <button onClick={handleClick}>Change Gif</button>
  </div>
  )
  
}

export default RandomCustom