import React,{useState,useEffect} from 'react'

const FetchHandleMultipleUrls = () => {

    
  const [data, setData] = useState({ comments: [], albums: [] });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);

        //run multiple fetches in parallel
        const [commentsData, albumsData] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/comments"),
          fetch("https://jsonplaceholder.typicode.com/albums123"), // bad URL to simulate error
        ]);

        //  if (!commentsData.ok || !albumsData.ok) {
        //   throw new Error("One of the requests failed");
        // }
        // const [comments, albums] = await Promise.all([
        //   commentsRes.json(),
        //   albumsRes.json(),
        // ]);



        let comments = [];
        let albums = [];
        // let errorMessages = [];

        //check each response separately
        if (commentsData.ok) {
          comments = await commentsData.json();
        } 
         else {
        //   errorMessages.push(
        //     "Failed to fetch comments (status: " + commentsData.status + ")"
        //   );

        setErrors(`Failed to fetch comments (status: ${commentsData.status})`);

        }

        if (albumsData.ok) {
          albums = await albumsData.json();
        } 
         else {
        //   errorMessages.push(
        //     "Failed to fetch albums (status: " + albumsData.status + ")"
        //   );
         setErrors(`Failed to fetch albums (status: ${albumsData.status})`);

         }

        setData({ comments, albums });
        //setErrors(errorMessages);
      } catch (err) {
        setErrors(err.message ||"something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Fetch Example -Separate Error Checks</h2>
      <p>Comments Loaded: {data.comments.length}</p>
      <p>Albums Loaded: {data.albums.length}</p>

      {errors && (
        <div style={{ color: "red" }}>
          <h4>Error:</h4>
          <p>{errors}</p>
        </div>

      )}
    </div>
  );
};


export default FetchHandleMultipleUrls