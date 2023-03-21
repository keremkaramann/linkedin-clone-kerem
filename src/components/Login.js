import "./css/Login.css";
import { auth } from "./firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
  const showPassword = () => {
    let x = document.getElementById("myInput");
    let showOr = document.getElementById("p-showw");
    if (x.type === "password") {
      showOr.innerHTML = "hide";
      x.type = "text";
    } else {
      showOr.innerHTML = "show";
      x.type = "password";
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert("Please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Free-PNG-Image.png"
        alt=""
      />
      <div className="form-cs">
        <form>
          <input
            placeholder="Full name (required if registering)"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email address"
          />
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile pic"
            type="text"
          />
          <div className="show-p">
            <input
              value={password}
              placeholder="password"
              type="password"
              id="myInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p id="p-showw" onClick={showPassword}>
              show
            </p>
          </div>
          <button type="submit" onClick={loginToApp}>
            Sign in
          </button>
        </form>
        <div className="p-center">
          <p>New to LinkedIn?{"  "}</p>
          <span onClick={register} className="login-register">
            Join now
          </span>
        </div>
      </div>
    </div>
  );
}
export default Login;
