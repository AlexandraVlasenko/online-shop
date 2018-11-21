import React, {Component} from 'react';
import {connect} from 'react-redux';
import Good from './Good';

class Goods extends Component {

    render(){
        const {data} = this.props;
        // console.log(data)
        return(
            <div>
                {data && Object.values(data).map(({id, title, description}) => <Good key={id}
                 {...{
                    id, title,description }} />
                )}                
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state.goods.data
    };
};

export default  connect(mapStateToProps)(Goods);