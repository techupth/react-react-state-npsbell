import "./App.css";
import { useState } from "react";

function App() {
const [text, setText] = useState("Greeting Message")
const handleTextThai = () => {
  setText("สวัสดี!")
}
const handleTextEng = () => {
  setText("Hi!")
}
const handleTextChina = () => {
  setText("你好!")
}
  return (
    <div className="App">
      <div className="greeting-container">{text}</div>
      <div className="buttons">
        <button onClick={handleTextThai}>สวัสดี!</button>
        <button onClick={handleTextEng}>Hi!</button>
        <button onClick={handleTextChina}>你好!</button>
      </div>
    </div>
  );
}

export default App;
