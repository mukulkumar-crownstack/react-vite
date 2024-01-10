import { useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function openCreatePostHandler() {
    setModalIsVisible(true);
  }

  function hideCreatePostHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={openCreatePostHandler} />
      <main>
        <PostsList isPosting={modalIsVisible} hideCreatePost={hideCreatePostHandler}/>
      </main>
    </>
  );
}

export default App;
