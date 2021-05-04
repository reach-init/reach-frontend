import React from 'react'

import { useAuth0 } from '../../auth/react-auth'
import User from './User'

const Profile = () => {
  const { loading, user } = useAuth0()
  console.log(loading)
  console.log(user)

  if (loading) {
    return <div>Loading profile</div>
  }

  return <User user={user} userPosts={[]}></User>
}

export default Profile
