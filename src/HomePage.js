import React, {Component} from 'react';
import {readGoods} from './ducks/goods';
import Goods from './Goods'


import {dispatch} from './store'

class HomePage extends Component {
    componentDidMount() {
        dispatch(readGoods())

    }

    render(){
        return(
            <div>
                HomePage
               <Goods />
            </div>
        )
    }
}



export default HomePage
