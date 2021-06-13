export function combineReducers<R extends any>(reducers: R) {
  type keys = keyof typeof reducers;
  const combinedReducer = (state: any, action: any) => {
    const newState  = {}  
    const keys = Object.keys(reducers);
    keys.forEach(key => {
      const result = reducers[key](state[key], action);
      newState[key] = result || state[key];
    });
    return newState;
  }
  return combinedReducer;
};
