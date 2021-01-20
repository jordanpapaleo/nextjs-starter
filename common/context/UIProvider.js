import * as React from 'react'

export const DispatchUIContext: Object = React.createContext()
export const UIContext: Object = React.createContext()

const reducer = (state, update) => ({ ...state, ...update })
const UIProvider = ({ children, initState = {} }) => {
  const [state, dispatch] = React.useReducer(reducer, initState)
  console.log('state', state)
  return (
    <DispatchUIContext.Provider value={dispatch}>
      <UIContext.Provider value={state}>
        {children}
      </UIContext.Provider>
    </DispatchUIContext.Provider>
  )
}

export default UIProvider
