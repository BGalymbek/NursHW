
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>📝 Барлық посттар</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <Link to={`/posts/${post.id}`}>Толығырақ оқу</Link>
        </div>
      ))}
    </div>
  );
}

