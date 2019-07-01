import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {

    const showTheStocks = ( this.props.stockList.map(eachStock => <Stock key={eachStock.id} stockData={eachStock} buyMe={this.props.buyMe} /> ) )

    return (

      <div>
        <h2>Stocks</h2>
        { showTheStocks }
      </div>
    )

  }

}

export default StockContainer;
