import logo from './logo.svg';
import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';
import RandomTag from './Components/RandomTag';
import RandomCustom from './Components/RandomCustom';
let a=["ekta","suna","bolna"]
function App() {
  return (
    <div className="main-container">
 
    {/* <Random/> */}
    <RandomCustom/> 
    {/* <Tag/> */}
    <RandomTag/>
    </div>
  );
}

export default App;
