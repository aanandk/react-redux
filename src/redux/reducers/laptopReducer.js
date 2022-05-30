import { BUY_LAPTOP } from '../actions/actionTypes'

const initialLaptopState = {
    numOfLaptops: 1001
}

const laptopReducer = (state = initialLaptopState, action) => {
    switch (action.type) {
        case BUY_LAPTOP:
            return { numOfLaptops: state.numOfLaptops - 1 }
        default:
            return state;
    }
}

export default laptopReducer;