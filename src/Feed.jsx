import "./Feed.css";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  onSnapshot,
  collection as firestoreCollection,
  collection,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector((state) => state.user?.user);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    // useEffect(() => {
    //   const unsubscribe = onSnapshot(
    //     firestoreCollection(db, "posts"),
    //     (snapshot) => {
    //       setPosts(
    //         snapshot.docs.map((doc) => ({
    //           id: doc.id,
    //           data: doc.data(),
    //         }))
    //       );
    //     }
    //   );

    return () => {
      // Cleanup the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      // Add a document to the "posts" collection
      await addDoc(firestoreCollection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      console.log(posts);
      setInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
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
