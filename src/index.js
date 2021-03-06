import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div className="ui cointainer comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 06:00</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
