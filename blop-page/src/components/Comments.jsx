import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  return(
    <div>
      <h3>💬 Комментарийлер:</h3>
      {comments.length === 0 ? (
        <p>Комментарийлер жоқ</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
