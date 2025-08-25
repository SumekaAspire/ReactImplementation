import React from 'react'

const UserList = ({users}) => {
  return (
    <div>
        <ul>
            {users.map(user =>(
                <li key={user.id} style={{padding:"5px"}}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserList