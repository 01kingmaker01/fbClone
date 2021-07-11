import React, { useEffect, useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { makePost, renewPost } from "../actions";

const MessageSender = ({ setId, posts, id, user: { photoURL } }) => {
  const [postData, setPostData] = useState({
    message: "",
    image: "",
  });

  const dispatch = useDispatch();

  const post = id ? posts?.find((message) => message._id === id) : null;

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setId(0);
    setPostData({ message: "", image: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === 0) {
      dispatch(makePost(postData));
    } else {
      dispatch(renewPost(id, postData));
    }

    clear();
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={photoURL} />
        <form>
          <input
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            className="messagesender_input"
            placeholder="What's on yor Mind?"
          />
          <input
            type="url"
            placeholder="Image URL"
            value={postData.image}
            onChange={(e) =>
              setPostData({ ...postData, image: e.target.value })
            }
          />
          <button onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
