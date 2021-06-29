import * as React from 'react'
import preferencesReducer from './reducer'
import {initialState} from './initialState'

const PreferencesContext = React.createContext()

function PreferencesProvider({children}) {
  const [state, dispatch] = React.useReducer(preferencesReducer, initialState)
  const value = {state, dispatch}
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}
function usePreferences() {
  const context = React.useContext(PreferencesContext)
  if (context === undefined) {
    throw new Error('usePreferences must be used within a Provider')
  }
  return context
}
export {PreferencesProvider, usePreferences}