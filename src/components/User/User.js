import RecentPosts from '../Posts/RecentPosts'
import ContactInfo from './ContactInfo'
import UserDashboard from './UserDashboard'

export default function User({ user, userPosts }) {
  let dob

  if (user.dateOfBirth) {
    dob = new Date(user.dateOfBirth)
    const date = dob.getDate()
    const month = dob.getMonth() + 1
    const year = dob.getFullYear()
    dob = `Born ${date}/${month}/${year}`
  } else {
    dob = ''
  }

  let address

  if (user?.location?.street) {
    address = `${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`
  } else {
    address = ''
  }
  let color

  if (user.gender === 'male') {
    color = 'primary'
  } else if (user.gender === 'female') {
    color = 'secondary'
  } else {
    color = 'inherit'
  }

  return (
    <div>
      <UserDashboard user={user}></UserDashboard>

      <ContactInfo user={user}></ContactInfo>

      <RecentPosts posts={userPosts}></RecentPosts>
    </div>
  )
}
