import React from 'react'
import UserService from '../../services/UserService'
import Post from '../UserCard/Post'

import { useParams } from 'react-router-dom'

export default function SearchResults(props) {
  const [users, setUsers] = React.useState([])
  React.useEffect(async () => {
    try {
      const users = await UserService.getAllUsers()
      setUsers(users.data)
    } catch (e) {
      console.log(e)
    }
  }, [])
  const { searchedText } = useParams()
  return (
    <div>
      <h3>Searched word: {searchedText}</h3>
      {users
        .filter((user) => {
          const fullName = `${user.first_name} ${user.last_name}`
          return fullName.toUpperCase().includes(searchedText.toUpperCase())
        })
        .map((user, index) => (
          <Post key={index} user={user} />
        ))}
    </div>
  )
}
