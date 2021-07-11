import React, { useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import { Posts } from "./Posts";
import StoryReel from "./StoryReel";

const Feed = ({ user, posts }) => {
  const [id, setId] = useState(0);
  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender
        scrollToTop={scrollToTop}
        id={id}
        setId={setId}
        user={user}
        posts={posts}
      />
      <Posts
        scrollToTop={scrollToTop}
        setId={setId}
        user={user}
        postsData={posts}
      />
    </div>
  );
};

export default Feed;
