import CartDetails from '../components_refactored/Cart/CartDetails'
import PageHOC from "./PageHOC";

const CartDetailsPage = () => {
  return (
    <PageHOC id="cart-details-page" name="CartDetails" component={<CartDetails />} />
  )
}
export default CartDetailsPage

