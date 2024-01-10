import { useState } from "react";

import Post from "./post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList({isPosting, hideCreatePost}) {
  const [bodyValue, setBodyValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");

  function onBodyChangeHandler(event) {
    setBodyValue(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setAuthorValue(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={hideCreatePost}>
          <NewPost
            bodyChangeHandler={onBodyChangeHandler}
            authorChangeHandler={onAuthorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={authorValue} body={bodyValue} />
        <Post author="Manuel" body="Let's get this done!" />
      </ul>
    </>
  );
}

export default PostsList;
