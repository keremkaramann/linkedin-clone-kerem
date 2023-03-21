import "./css/SideBar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar_recent">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <div className="stat_side">
            <p>Connections</p>
            <p>Connect with alumni</p>
          </div>

          <p className="stat_num">2456</p>
        </div>
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="stat_num">1200</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        <p>Groups</p>
        <p>Events</p>
        <p>Followed Hashtags</p>
        {recentItem("react")}
        {recentItem("javascript")}
        {recentItem("programming")}
      </div>
    </div>
  );
}
export default SideBar;
