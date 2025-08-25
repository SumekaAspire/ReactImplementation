import React,{useState, useEffect} from 'react'
import axios from "axios";

const withLoaderAndFetch = (WrappedComponent, url) => {
  return  function enhancedComponent({props}){

    const[loading, setLoading]= useState(true);
    const[data, setData]=useState(null);

    useEffect(()=>{

        async function fetchData(){
            setTimeout(async ()=>{
                try{
                const response = await axios.get(url);
                setData(response.data);
        }catch(error){
            console.log("Errors fetched:"+ error);
        }finally{
            setLoading(false);
        }
     },2000)
    }
        fetchData();
    },[url]);

    if(loading){
       return( 
       <div style={{fontWeight:"bold", color:"teal"}}>LOADING...</div>)
    }



    return<WrappedComponent data={data}{...props}/>
  }
  
}

export default withLoaderAndFetch