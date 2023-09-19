/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default "App";
*/

function App () {
  return (
      <div className="first-frame">
        <div className="div">
          <div className="overlap">
            <div className="frame">
              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper">Get started</div>
                </div>
              </div>
            </div>
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src="./logo.jpg" />
              <div className="change-your-life">Change&nbsp;&nbsp;your life today</div>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">logo</div>
            <div className="text-wrapper-3">About us</div>
            <div className="text-wrapper-4">Get started</div>
            <div className="text-wrapper-5">Products</div>
          </div>
        </div>
      </div>
  );
};
export default App;

