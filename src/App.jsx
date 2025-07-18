import React from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Topics from "./pages/Topics";
import LogIn from "./pages/LogIn";
import ArticleCard from "./Components/ArticleCard";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./pages/SingleArticle";
import CommentCard from "./Components/CommentCard";
import CommentsList from "./Components/CommentsList";
import TopicList from "./Components/TopicList";
import TopicPage from "./pages/TopicPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />

        <Route path="/topics" element={<TopicList />} />
        <Route path="/logIn" element={<LogIn />} />
      <Route path="topics/:slug" element={<TopicPage/>}/>
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

