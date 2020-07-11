import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, Order, Contact } from './views';
import './App.css';
import Product from './views/component/Product'


class App extends Component {

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
      <>
        <Router>
          <div>
            <header>
              <nav>
                <a><Link to="/contact">Contact</Link></a>
                <a><Link to="/order">Order</Link></a>
                <a><Link to="/">Home</Link></a>
              </nav>
            </header>
            <main>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/order">
                  <Order />
                  <form id="app">
                    <ul>
                      {services}
                    </ul>

                    <div className="total">
                      Total:
          <span>Rp {this.state.total}</span>
                    </div>
                    <button class="btn-bayar" type="submit">Pembayaran</button>
                  </form>
                </Route>
              </Switch>
            </main>
          </div>
        </Router >
      </>

    );
  }
}
export default App;


