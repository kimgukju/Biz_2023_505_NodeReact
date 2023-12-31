import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import BbsMain from "./comps/BbsMain";
import { hello } from "./modules/FetchModule";
import { BBsConTextProvider } from "./provider/BBsProvider";

// 여기는 App.js
function App() {
  const [title, setTitle] = useState("");
  // 즉시 실행 함수로 만들기
  // 익명 함수 호출방식
  // 생성된 함수를 바로 사용하기
  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {title ? title : "반갑습니다 React BBS Project 입니다."} </p>
      </header>
      <BBsConTextProvider>
        <BbsMain />
      </BBsConTextProvider>
    </div>
  );
}

export default App;
