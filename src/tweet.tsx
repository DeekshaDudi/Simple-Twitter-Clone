// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

type TweetProps = {
  username: string;
  content: string;
  likes: number;
  timestamp: string;
};

function Tweet(props: TweetProps) {

  const [likeCount, setLikeCount] = useState(props.likes);
  const [liked, setLiked] = useState(false);

  function handleLikes() {

    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  }

  return (
    <div className="tweet">
      <h3>@{props.username}</h3>
      <p style = {{fontSize: "18px"}}>{props.content}</p>
      <p style = {{fontSize: "16px"}}>{props.timestamp} ago</p>

      <button onClick={handleLikes}>
        {liked ? "❤️" : "🤍"} {likeCount}
      </button>
    </div>
  );
}

export default Tweet;
