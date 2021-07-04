import * as React from 'react'
import toggleButtonsReducer from './reducer'
import {initialState} from './initialState'

const ToggleButtonsContext = React.createContext()

function ToggleButtonsProvider({children}) {
  const [state, dispatch] = React.useReducer(toggleButtonsReducer, initialState)
  const value = {state, dispatch}
  return <ToggleButtonsContext.Provider value={value}>{children}</ToggleButtonsContext.Provider>
}
function useToggleButtons() {
  const context = React.useContext(ToggleButtonsContext)
  if (context === undefined) {
    throw new Error('useToggleButtons must be used within a Provider')
  }
  return context
}
export {ToggleButtonsProvider, useToggleButtons}