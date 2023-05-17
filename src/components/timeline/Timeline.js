import React from "react";
import TweetBox from "./TweetBox";
import "./Timeline.css";
import Post from "./Post";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>ホーム</h2>
        <TweetBox />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Timeline;
