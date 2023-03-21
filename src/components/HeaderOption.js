import "./css/headerOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function HeaderOption({ avatar, title, Icon, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="HeaderOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="header_option_avatar" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <div style={{ position: "relative" }}>
        <h4 className="header_option_title ">{title}</h4>
      </div>
    </div>
  );
}
export default HeaderOption;
