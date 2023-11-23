import { Link } from "react-router-dom";

function TypingTest() {

  return (
    <div className="body">
        <div className = "wrapper">
          <input type = "text" className="input-field"></input>
          <div className="content-wrapper">
              <div className="typing-text">
                  <p className = "paragraph"></p>
              </div>
              <div className="content">
                  <ul className="results">
                      <li className = "time">
                          <p>
                              Time Left:
                          </p>
                          <span>
                              <b>60</b>s
                          </span>
                      </li>
                      <li className="mistake">
                          <p>
                              Mistakes:
                          </p>
                          <span>0</span>
                      </li>
                      <li className="acc">
                          <p>
                              ACC:
                          </p>
                          <span>
                              0%
                          </span>
                      </li>
                      <li className="wpm">
                          <p>
                              WPM:
                          </p>
                          <span>
                              0
                          </span>
                      </li>
                  </ul>
                  <button>Try Again</button>
              </div>
          </div>
        </div>
    </div>
  );
}

export default TypingTest;
