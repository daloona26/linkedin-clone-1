import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import Widgets from "./Widgets";

function App() {
  const user = useSelector((state) => state.user?.user);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch, auth]);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />

          <Feed />

          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
