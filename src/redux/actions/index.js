import axios from "axios"
import { BUY_LAPTOP, BUY_MOBILE, FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionTypes"

export const buyLaptop = () => {
    return {
        type: BUY_LAPTOP
    }
}

export const buyMobile = () => {
    return {
        type: BUY_MOBILE
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFail = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest);
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                let users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFail(error))
            })
    }
}