import { BUY_MOBILE } from "../actions/actionTypes"

const initialMobileState = {
    numOfMobiles: 999
}

const mobileReducer = (state = initialMobileState, action) => {
    switch (action.type) {
        case BUY_MOBILE: {
            return { numOfMobiles: state.numOfMobiles - 1 }
        }
        default:
            return state;
    }
}

export default mobileReducer;