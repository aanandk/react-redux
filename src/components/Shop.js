
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyLaptop, buyMobile, fetchUsers } from '../redux/actions';
import "./style.css";

class Shop extends Component {

    // state = {
    //     numOfLaptops: 1000
    // }
    // buyLaptops = () => {
    //     this.setState({ numOfLaptops: this.state.numOfLaptops - 1 })
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 className='title'>Shop</h1>
                <div className='items'>
                    <div className='item'>
                        <p>Dell Inspirion</p>
                        <p>Availability: {this.props.numOfLaptops}</p>
                        <button onClick={this.props.buyLaptop}>BUY</button>
                    </div>
                    <div className='item'>
                        <p>Samsung G32</p>
                        <p>Availability: {this.props.numOfMobiles}</p>
                        <button onClick={this.props.buyMobile}>BUY</button>
                    </div>
                    <div className='item'>
                        <p>Users API Call</p>
                        <p>Count: {this.props.users.length}</p>
                        <button onClick={this.props.fetchUsers}>Call API</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        numOfLaptops: state.laptops.numOfLaptops,
        numOfMobiles: state.mobiles.numOfMobiles,
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyLaptop: () => dispatch(buyLaptop()),
        buyMobile: () => dispatch(buyMobile()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);


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