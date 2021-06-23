import * as React from 'react'
import cartReducer from './reducer'
import {initialState} from './initialState'

const CartContext = React.createContext()

function CartProvider({children}) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState)
  const value = {state, dispatch}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}
export {CartProvider, useCart}