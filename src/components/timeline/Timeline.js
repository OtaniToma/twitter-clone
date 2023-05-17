import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import "./Timeline.css";
import Post from "./Post";
import db from "../../firebase";
import {
  doc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(
    //     querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //   );
    // });

    // Cloud Firestore でリアルタイム アップデートを入手する
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map(
          (doc) => ({
            ...doc.data({ serverTimestamps: "estimate" }),
            id: doc.id,
          })
          // estimate：保留中(serverTimeStamp が null)の時は見積もり時刻を返してくれる。 timestamp を利用できるようになると、その値に変更する
          // 省略 または none：timestamp を利用できるようになるまでは null で返す
        )
      );
    });
  }, []);

  const _deletePost = (props) => {
    const id = props;
    deleteDoc(doc(db, "posts", id));
  };

  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>ホーム</h2>
        <TweetBox />
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              timestamp={post.timestamp}
              id={post.id}
              deletePost={_deletePost}
              favorite={post.favorite}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Timeline;
