import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId="1586326965623361536" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="toma_wari"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/toma_wari"}
          options={{ text: "TwitterShareButton", via: "toma_wari" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
