import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://lifestyle.abs-cbn.com/thumbnail.ashx?t=photos&w=300&h=200&p=2037/29495-10-17-19-bp.jpg" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://lifestyle.abs-cbn.com/thumbnail.ashx?t=photos&w=300&h=200&p=2037/29495-10-17-19-bp.jpg" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;