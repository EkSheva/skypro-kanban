// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className="wrapper">
        {/* pop-up start */}

        <PopExit />

        <PopNewCard />
        <PopBrowse />

        {/* pop-up end */}

        <header className="header">
          <div className="container">
            <div className="header__block">
              <div className="header__logo _show _light">
                <a href="" target="_self">
                  <img src="../images/logo.png" alt="logo" />
                </a>
              </div>
              <div className="header__logo _dark">
                <a href="" target="_self">
                  <img src="../images/logo_dark.png" alt="logo" />
                </a>
              </div>
              <nav className="header__nav">
                <button
                  className="header__btn-main-new _hover01"
                  id="btnMainNew"
                >
                  <a href="#popNewCard">Создать новую задачу</a>
                </button>
                <a href="#user-set-target" className="header__user _hover02">
                  Ivan Ivanov
                </a>
                <div
                  className="header__pop-user-set pop-user-set"
                  id="user-set-target"
                >
                  {/* <!-- <a href="">x</a> --> */}
                  <p className="pop-user-set__name">Ivan Ivanov</p>
                  <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <button type="button" className="_hover03">
                    <a href="#popExit">Выйти</a>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* <Header /> */}
        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
