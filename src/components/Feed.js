import "./css/Feed.css";
import { useEffect, useState } from "react";
import InputOption from "./InputOption";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const hoursAndMinutes = date.getHours() + ":" + date.getMinutes();
  let currentDate = `${day}/${month}/${year} ${hoursAndMinutes}`;

  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("post").add({
      name: user.displayName,
      description: currentDate,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#378FE9" />
          <InputOption title="Video" Icon={SmartDisplayIcon} color="#5F9A41" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C37D17" />
          <InputOption
            title="Write Article"
            Icon={ArticleIcon}
            color="#E16744"
          />
        </div>
      </div>
      {/* posts */}
      <FlipMove>
        {post.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}
export default Feed;
