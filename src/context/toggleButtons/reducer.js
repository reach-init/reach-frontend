import {initialState} from './initialState'
export default function toglleButtonsReducer(state, action) {
    switch (action.type) {
        case 'change': 
            return { ...state, selected: action.payload };
        default:
            return state;
    }
}