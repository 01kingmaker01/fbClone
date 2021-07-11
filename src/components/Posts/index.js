import React, { useEffect, useState } from "react";
import Post from "../Post";

export const Posts = ({ postsData, setId, user, scrollToTop }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    var desPosts = postsData?.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
    setPosts(desPosts);
  }, [postsData]);

  return (
    <>
      {posts
        ? posts.map(
            ({
              _id,
              photoURL,
              message,
              timestamp,
              displayName,
              image,
              author,
            }) => {
              return (
                <Post
                  user={user}
                  author={author}
                  key={_id}
                  id={_id}
                  photoURL={photoURL}
                  message={message}
                  timestamp={timestamp}
                  displayName={displayName}
                  image={image}
                  setId={setId}
                  scrollToTop={scrollToTop}
                />
              );
            }
          )
        : null}
    </>
  );
};
