import RestaurantList from '../components_refactored/Restaurant/RestaurantList';
import PageHOC from "./PageHOC";

const FoodPage = () => {
    return (
        <PageHOC id="food-page" name="Food" component={<RestaurantList />} />
    )
}
export default FoodPage

