import React from 'react'
import withLoaderAndFetch from './withLoaderAndFetch'
import UserLists from './UserLists'


const UserLoaderandFetch = withLoaderAndFetch(UserLists,'https://jsonplaceholder.typicode.com/users')

const ExampleApiData = () => {
  return (
    <div>
        <h2>Higher Order Component</h2>
        <UserLoaderandFetch />
    </div>
  )
}

export default ExampleApiData