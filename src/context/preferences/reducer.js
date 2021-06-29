import {initialState} from './initialState'
export default function preferencesReducer(state, action) {
    switch (action.type) {
        case 'toggle1': 
        return { ...state, setting1 : !state.setting1 };
        case 'reset':
        return {
            ...initialState
        };
        default:
        return state;
    }
}