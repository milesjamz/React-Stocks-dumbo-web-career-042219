import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


render() {

  let showTheStocks = this.props.myStocks ? this.props.myStocks.map(eachStock => <Stock key={eachStock.id} buyMe={this.props.buyMe} stockData={eachStock} />) : null

    return (
      <div>
        <h2>My Portfolio</h2>
          { showTheStocks }
      </div>
    );

  }
}

export default PortfolioContainer;