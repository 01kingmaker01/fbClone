import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./actions";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";

const App = () => {
  const dispatch = useDispatch();

  const { postsReducer, userReducer } = useSelector((state) => {
    return state;
  });
  const postsData = postsReducer.postsPayload;
  const user = userReducer.userPayload;

  useEffect(() => {
    return dispatch(user ? getPost() : { type: null });
  }, [user, dispatch]);

  return (
    <div className="app">
      {!user || user === "" ? (
        <Login />
      ) : (
        <>
          <Header user={user} />
          <div className="app_body">
            <Sidebar user={user} />
            <Feed user={user} posts={postsData} />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
