import React, { Component } from 'react';
import Product from './Product'
class Total extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0,
        };

        this.addTotal = this.addTotal.bind(this);
    }

    addTotal(price) {
        this.setState({
            total: this.state.total + price,
        });
    }

    render() {
        const services = this.props.products.map((product, index) => {

            // Buat component Product untuk setiap product di dalam Array Products
            // Perhatikan kita juga mengirim fungsi addTotal
            return <Product product={product} addTotal={this.addTotal} key={index} />;
        })

        return (
            <Order />
        );
    }
}

export default Total;
