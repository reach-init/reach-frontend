import useFetch from 'use-http'
import { useState, useEffect } from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'

import User from './User'

export default function LoadUser(props) {
  const [user, setUser] = useState()
  const userFetch = useFetch('https://reach-network.herokuapp.com/api/v1/user')

  useEffect(() => {
    loadUser()
  }, [])

  const matches = !useMediaQuery('(min-width:600px)')
  console.log(matches)

  async function loadUser() {
    const { id } = props.match.params
    const user = await userFetch.get(`${id}`)
    
    console.log('User')
    console.log(Object.values(user)[0])
    if (userFetch.response.ok) setUser(Object.values(user)[0])
  }

  const [userPosts, setUserPosts] = useState()
  const userPostsFetch = useFetch('https://reach-network.herokuapp.com/api/v1/user', {
  })

  useEffect(() => {
    loadUserPosts()
  }, [])

  async function loadUserPosts() {
    const { id } = props.match.params
    const userPosts = await userPostsFetch.get(`${id}/post`)
    console.log(Object.values(userPosts)[0])
    if (userPostsFetch.response.ok) setUserPosts(Object.values(userPosts)[0])
  }

  if (!user) return <div>Loading</div>
  if (!userPosts) return <div>Loading</div>

  return <User user={user} userPosts={userPosts}></User>
}
