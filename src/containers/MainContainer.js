import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    myStocks: []
  }

buyMe = (e) => {
  // console.log(e.currentTarget.id);
  const selectedStock = this.props.stockList.find(stock => stock.id == e.currentTarget.id);
    console.log(selectedStock)
    if (this.state.myStocks.find(stock => stock.id == selectedStock.id) )
        { this.sellMe(e.currentTarget.id) } else { 
      const newStocks = [...this.state.myStocks, selectedStock]
        this.setState({ myStocks: newStocks })
    }
}

sellMe = (number) => {
  const allButTheOneISold = this.state.myStocks.filter(stock => stock.id != number)
    this.setState({ myStocks: allButTheOneISold })
}


  render() {
    return (
      <div>
        <SearchBar typeSort={this.props.typeSort} alphaSort={this.props.alphaSort} priceSort={this.props.priceSort} />

          <div className="row">
            <div className="col-8">

              <StockContainer  stockList={this.props.stockList} buyMe={this.buyMe} />

            </div>
            <div className="col-4">

              <PortfolioContainer buyMe={this.buyMe} myStocks={this.state.myStocks} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
