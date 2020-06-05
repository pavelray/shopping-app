import {CartActionType} from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

export const cartReducer = (state = INITIAL_STATE, acion) => {
    switch(acion.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}
