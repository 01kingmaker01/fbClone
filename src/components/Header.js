import React from "react";
import "./Header.css";
import {
  Search,
  Home,
  Flag,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
  Replay,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Header = ({ user: { displayName, photoURL } }) => {
  // const [ user , dispatch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png"
          alt="Fb_logo"
        />
        <div className="header_input">
          <Search />
          <input type="text" />
        </div>
      </div>

      <div className="header_middle">
        <div className="header_option header_option_active">
          <Home fontSize="large" />
        </div>
        <div className="header_option">
          <Flag fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Replay />
          SignOut
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
