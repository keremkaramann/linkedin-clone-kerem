import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Widget from "./components/Widgets";
import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./components/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //then user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //then user not logged in
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header Comp */}
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app_body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
