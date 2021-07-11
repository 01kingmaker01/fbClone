import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";

const Sidebar = ({ user: { displayName, photoURL } }) => {
  return (
    <div className="sidebar">
      <SidebarRow src={photoURL} title={displayName} />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Friends" />
      <SidebarRow Icon={People} title="friend" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="MarketPlace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
};

export default Sidebar;
