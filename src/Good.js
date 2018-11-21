import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Card,Button, Modal } from 'antd'
import _ from 'lodash';

const Meta = Card.Meta;

class Good extends Component {
 static propTypes = {
     id: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired
 };    

    coverStyle = { width: 240 };
    showMoreInfo =() =>{
        const {title, description} = this.props
        Modal.info({
            title: "More info",
            content: (
                <div>
                    <h2>
                      {title}  
                    </h2>
                    <div>{description}</div>
                </div>
            )
        })
    };
    buyNow =() =>{
        alert("Buy Now!")
    };

    render(){
        const{id, title, description} = this.props;
        return(
                <Card
                 {...{
                style: this.coverStyle,
                cover:(
                    <img
                    alt= {title}
                    {...{
                         
                          src: `/img/${id}.jpg`
                }}
                />
                ), 
                actions: [
                <Button type = "primary" onClick = {this.buyNow}>Buy Now!</Button>,
                <Button onClick = {this.showMoreInfo}>More info!</Button>
                ]
                }}
                >                
            <Meta
            {...{
                title,
                description: _.truncate(description, {length: 10})
            }}           
            />
            </Card>
        );
    }
}


export default Good
