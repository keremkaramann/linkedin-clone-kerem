import "./css/Post.css";
import InputOption from "./InputOption";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ScreenRotationAltOutlinedIcon from "@mui/icons-material/ScreenRotationAltOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { forwardRef } from "react";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message} </p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpIcon} title={"Like"} color={"gray"} />
        <InputOption
          Icon={MessageOutlinedIcon}
          title={"Comment"}
          color={"gray"}
        />
        <InputOption
          Icon={ScreenRotationAltOutlinedIcon}
          title={"Repost"}
          color={"gray"}
        />
        <InputOption Icon={SendOutlinedIcon} title={"Send"} color={"gray"} />
      </div>
    </div>
  );
});
export default Post;
