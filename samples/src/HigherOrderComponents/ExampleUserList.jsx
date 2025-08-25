import React,{useState, useEffect} from 'react'
import UserList from './UserList'
import withLoader from './withLoader';

const UserListWithLoader = withLoader(UserList);

const ExampleUserList = () => {
    const[isDataLoading, setIsDataLoading]= useState(true);
    const [users, setUsers]= useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setUsers([
                {id:1, name:'sam'},
                {id:2, name:'ramesh'},
                {id:3, name:'somu'},
                {id:4, name:'kathir'},
                {id:5, name:'pavi'}
            ])
            setIsDataLoading(false);
        },2000)
    },[]);


  return (
    <div>
        <h2>Higher order component</h2>
        <UserListWithLoader isLoading={isDataLoading} users={users}/>
    </div>
  )
}

export default ExampleUserList