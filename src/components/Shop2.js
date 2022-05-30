
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux';
import { buyLaptop, buyMobile, fetchUsers } from '../redux/actions';
import "./style.css";

function Shop2(props) {
    let users = useSelector(state => state.users.users);
    let numOfLaptops = useSelector(state => state.laptops.numOfLaptops);
    let numOfMobiles = useSelector(state => state.mobiles.numOfMobiles);
    // state = {
    //     numOfLaptops: 1000
    // }
    // buyLaptops = () => {
    //     this.setState({ numOfLaptops: this.state.numOfLaptops - 1 })
    // }

    return (
        <div>
            <h1 className='title'>Shop2</h1>
            <div className='items'>
                <div className='item'>
                    <p>Dell Inspirion</p>
                    <p>Availability: {numOfLaptops}</p>
                    <button onClick={props.buyLaptop}>BUY</button>
                </div>
                <div className='item'>
                    <p>Samsung G32</p>
                    <p>Availability: {numOfMobiles}</p>
                    <button onClick={props.buyMobile}>BUY</button>
                </div>
                <div className='item'>
                    <p>Users API Call</p>
                    <p>Count: {users.length}</p>
                    <button onClick={props.fetchUsers}>Call API</button>
                </div>
            </div>
        </div>
    )

}
// const mapStateToProps = (state) => {
//     return {
//         numOfLaptops: state.laptops.numOfLaptops,
//         numOfMobiles: state.mobiles.numOfMobiles,
//         users: state.users.users
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        buyLaptop,
        buyMobile,
        fetchUsers
    }, dispatch)

    // return {
    //     buyLaptop: () => dispatch(buyLaptop()),
    //     buyMobile: () => dispatch(buyMobile()),
    //     fetchUsers: () => dispatch(fetchUsers())
    // }
}
export default connect(null, mapDispatchToProps)(Shop2);


// import { useState } from 'react'
// import { useSelector } from 'react-redux'

// function Shop(props) {
//     console.log(props)
//     // const [state, setState] = useState({ numberOfLaptops: 1000 })
//     let numOfLaptops = useSelector(state => state.numOfLaptops)
//     const buyLaptop = () => {
//         // setState({ numberOfLaptops: state.numberOfLaptops - 1 })
//     }
//     return (
//         <div>
//             <h1>Shop</h1>
//             <div className="item">
//                 <p>Dell Inspiron</p>
//                 <p>Available: {props.numberOfLaptops}</p>
//                 <button onClick={buyLaptop}>BUY</button>
//             </div>
//         </div>
//     )
// }

// export default Shop;