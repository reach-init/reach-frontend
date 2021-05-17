import React, { useState, useEffect } from 'react'
import UserCard from '../UserCard/UserCard'
import { useParams } from 'react-router-dom'
import useFetch from 'use-http'
import { headers } from '../../index'

export default function SearchResults(props) {
  const { get } = useFetch('https://reach-network.herokuapp.com/api/v1', { headers })
  const [users, setUsers] = useState()

  const { searchedText } = useParams()

  async function loadUsers() {
    const users = Object.values(await get('user?limit=100&page=1'))[0]
    
    return users
  }

  async function loadTags() {
    const tags = await get('tag')
    return tags
  }
  useEffect(async () => {
    setUsers(await loadUsers())
  }, [])

  console.log(users)

  if (!users) {
    return <div>Loading...</div>
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`
    console.log(fullName)
    console.log(searchedText)
    return fullName.toUpperCase().includes(searchedText.toUpperCase())
  })

  console.log(filteredUsers)

  return (
    <div>
      <h3>Searched word: {searchedText}</h3>
      {filteredUsers.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  )
}
