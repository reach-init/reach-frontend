import Posts from '../components_refactored/Posts/Posts'
import PageHOC from "./PageHOC";

const HomePage = () => {
  return (
    <PageHOC id="home-page" name="Home" component={<Posts />} />
  )
}
export default HomePage

