import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { posts } from "./constants/posts";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("main");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    let filtered;
    if (selectedTab === "thoughts") {
      filtered = posts.filter((post) => post.id === "thoughts");
    } else if (selectedTab === "media") {
      filtered = posts.filter((post) => post.id === "media");
    } else {
      filtered = posts.slice(0, 6);
    }
    setFilteredPosts(filtered);
  }, [selectedTab]);

  return (
    <>
      <div className="bg-[#f3e8d2] h-screen overflow-hidden">
        <div className="pt-[4.75rem] lg:pt-[5.25rem] ">
          <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <MainContent posts={filteredPosts} />
        </div>
      </div>
    </>
  );
};

export default App;
