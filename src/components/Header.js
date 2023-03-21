import "./css/Header.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "./firebase";
import WidgetsIcon from "@mui/icons-material/Widgets";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="	https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="linkedin"
        />

        <div className="header_input">
          <SearchTwoToneIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisedUserCircleIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption avatar={true} title={"Me"} onClick={logoutOfApp} />

        <div className="border"></div>
        <HeaderOption title="Work" Icon={WidgetsIcon} />
        <HeaderOption title="Try Premium for free" className="gold" />
      </div>
    </div>
  );
}
export default Header;
