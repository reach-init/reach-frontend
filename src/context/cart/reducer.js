import {initialState} from './initialState'
export default function cartReducer(state, action) {
    switch (action.type) {
        case 'add': 
        return { ...state, items: [action.payload, ...state.items] };
        case 'reset':
        return {
            ...initialState
        };
        default:
        return state;
    }
}