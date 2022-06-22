import React, { useEffect, useState } from "react";

import "../src/css/main.css";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Banner from "./components/Banner";
import Posts from "./components/Posts";
import fetchData from "./axios/fetchData";
import About from "./components/About";

// export const BlogDataContext = React.createContext();

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setBlogData(data.blog);
      setPostData(data.posts);
      setUserData(data.users[0]);
    };
    getData();
  }, []);

  return (
    <>
      <Header isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}></Header>
      <Banner data={blogData}></Banner>
      <main>
        <div className='max-width'>
          <Posts data={postData}></Posts>
          <About data={userData}></About>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
