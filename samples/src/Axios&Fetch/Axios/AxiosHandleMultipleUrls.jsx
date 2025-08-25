import React,{useState, useEffect} from 'react'
import axios from 'axios';

const AxiosHandleMultipleUrls = () => {

    const [data, setData] = useState({posts:[], users:[]})
    const [loading, setlLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const getData = async()=>{
            try{
                setlLoading(true);

                const[postsData, usersData] = await Promise.all([
                    axios.get("https://jsonplaceholder.typicode.com/posts"),
                    axios.get("https://jsonplaceholder.typicode.com/users"),
                ]);
                setData({
                    posts: postsData.data,
                    users: usersData.data,
                })

            }catch(err){
                setError(err.message || "Something went wrong")

            }finally{
                setlLoading(false);
            }
        }
        getData();
    },[])

    if(loading) return <p>Loading ... </p>
    if(error) return <p>{error}</p> 

  return (
    <div>
        <h2>AxiosHandleMultipleUrls</h2>
        <p>Total Posts: {data.posts.length}</p>
        <p>Total Users: {data.users.length}</p>

    </div>
  )
}

export default AxiosHandleMultipleUrls