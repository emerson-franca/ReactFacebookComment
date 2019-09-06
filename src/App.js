import React from "react";
import "./App.css";
import PostList from "./components/PostList";

import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header>Hello World</Header>
      <PostList />
    </>
  );
}

export default App;
