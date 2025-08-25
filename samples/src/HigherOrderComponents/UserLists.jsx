import React from 'react'

const UserLists = ({data}) => {
  return (
    <div>
        <ol> 
            {data.map((user)=>(
                 <li key={user.id} style={{padding:"5px"}}>{user.name} - {user.email}</li>
            ))}
        </ol>
    </div>
  )
}

export default UserLists