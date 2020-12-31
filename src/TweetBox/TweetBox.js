import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from '../firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
      e.preventDefault();

      db.collection("posts").add({
        displayName: "Rithesh",
        username: "rithesh_rithu_22",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://4.bp.blogspot.com/-_Z7OXF2wr30/Tdkob3VFvhI/AAAAAAAAArQ/-MF1dvrAkzU/s1600/DBeckham360x480.jpg",
      });

      setTweetMessage("");
      setTweetImage("");
    };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://4.bp.blogspot.com/-_Z7OXF2wr30/Tdkob3VFvhI/AAAAAAAAArQ/-MF1dvrAkzU/s1600/DBeckham360x480.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
