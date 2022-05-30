// import axios from 'axios'
// import { GET_USERS, USERS_ERROR } from './actionTypes'

// export const getUsers = () => async dispatch => {
//     try {
//         const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
//         // console.log('res.data', res.data)
//         dispatch({
//             type: GET_USERS,
//             payload: res.data
//         })
//     }
//     catch (error) {
//         dispatch({
//             type: USERS_ERROR,
//             payload: error
//         })
//     }
// }