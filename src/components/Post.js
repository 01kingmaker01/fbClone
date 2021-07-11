import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  DeleteForever,
  Edit,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import moment from "moment";

import "./Post.css";
import { delPost } from "../actions";
import { useDispatch } from "react-redux";

const Post = ({
  scrollToTop,
  id,
  photoURL,
  image,
  author,
  displayName,
  timestamp,
  message,
  setId,
  user,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="post_top">
        <div className="post_top_left">
          <Avatar src={photoURL} className="post_avatar" />
          <div className="post_topInfo">
            <h3>{displayName}</h3>
            <p>{moment(timestamp).fromNow()}</p>
          </div>
        </div>
        {user?.uid === author ? (
          <div className="post_top_right" onClick={() => setId(id)}>
            <Edit />
          </div>
        ) : null}
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="postImage" />
      </div>
      <div className="post_options">
        <div className="post_option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMe />
          <p>Share</p>
        </div>
        {user?.uid === author ? (
          <div
            id="delete"
            className="post_option "
            onClick={() => {
              dispatch(delPost(id));
              scrollToTop();
            }}
          >
            <DeleteForever />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
