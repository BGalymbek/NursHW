
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostDetail() {
  const { id } = useParams();
  
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Жүктелуде...</p>;

  return(
    <div>
      <Link to="/posts">Назад</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to={`/posts/${post.id}/comments`}>Show comments</Link>
      <Outlet/>
    </div>
  );
}

