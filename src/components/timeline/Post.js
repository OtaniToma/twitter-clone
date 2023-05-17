import { VerifiedUser } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import { format, formatDistance } from "date-fns";
import { ja } from "date-fns/locale";
import "./Post.css";

const Post = forwardRef(
  (
    {
      displayName,
      username,
      verified,
      text,
      image,
      avatar,
      timestamp,
      id,
      deletePost,
    },
    ref
  ) => {
    const time = (date) => {
      let timestamp = formatDistance(new Date(), date.toDate(), {
        locale: ja,
      });
      return timestamp;
    };

    const _deletePost = () => {
      deletePost(id);
    };

    return (
      <div className="post" ref={ref}>
        <div className="post--avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post--body">
          <div className="post--header">
            <div className="post--headerText">
              <h3>
                {displayName}
                <span className="post--headerSpecial">
                  <VerifiedUser className="post--badge" />@{username}{" "}
                  {time(timestamp)}
                </span>
              </h3>
            </div>
            <div className="post--headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post--footer">
            <DeleteIcon
              className="icon--delete"
              fontSize="small"
              onClick={_deletePost}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
