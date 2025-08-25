import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosMultipleUrlsAllSettled = () => {
  const [data, setData] = useState({ comments: [], albums: [] });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);

        const [commentsResponse, albumsResponse] = await Promise.allSettled([
          axios.get("https://jsonplaceholder.typicode.com/comments"),
          axios.get("https://jsonplaceholder.typicode.com/albums123"), // bad URL
        ]);

        let comments = [];
        let albums = [];

        if (commentsResponse.status === "fulfilled") {
          comments = commentsResponse.value.data;
        } else {
        
          setErrors(`Failed to fetch comments: ${commentsResponse.reason.message}`)
        
        }

        if (albumsResponse.status === "fulfilled") {
          albums = albumsResponse.value.data;
        } else {
          setErrors(`Failed to fetch albums: ${albumsResponse.reason.message}`);        
        }

        setData({ comments, albums });
      } catch (err) {
        setErrors([err.message || "Something went wrong"]);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Axios : Promise.AllSettled- Separate Error Checks</h2>
      <p>Comments Loaded: {data.comments.length}</p>
      <p>Albums Loaded: {data.albums.length}</p>

      {errors && (
        <div style={{ color: "red" }}>
          <h4>Some requests failed:</h4>
          <p>{errors}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosMultipleUrlsAllSettled;
