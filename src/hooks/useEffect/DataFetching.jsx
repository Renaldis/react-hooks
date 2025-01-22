import { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div>{post.title}</div>
        {/* {post.length > 0 ? (
          post.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#f8f9fa",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid #dee2e6",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  color: "#343a40",
                  margin: "0 0 10px",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6c757d",
                  margin: "0 0 10px",
                }}
              >
                {item.body}
              </p>
              <div style={{ fontSize: "12px", color: "#adb5bd" }}>
                <strong>User ID:</strong> {item.userId} |{" "}
                <strong>Post ID:</strong> {item.id}
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )} */}
      </div>
    </div>
  );
}

export default DataFetching;
