import React from "react";
import TweetBox from "./TweetBox";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>ホーム</h2>
        <TweetBox />
      </div>
    </div>
  );
}

export default Timeline;
