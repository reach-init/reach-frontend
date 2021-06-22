import Profile from '../components/User/Profile'
import PageHOC from "./PageHOC";

const ProfilePage = () => {
  return (
    <PageHOC id="profile-page" name="Profile" component={<Profile />} />
  )
}
export default ProfilePage

