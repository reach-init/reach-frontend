import CartDetails from '../components_refactored/Cart/CartDetails'
import PageHOC from "./PageHOC";

const CartDetailsPage = () => {
  return (
    <PageHOC showBack showCartButton={false} id="cart-details-page" name="Cart Details" component={<CartDetails />} />
  )
}
export default CartDetailsPage

