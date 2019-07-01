import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'


class App extends Component {

state = {
	stockList: [],
  stocksWeSend: []
}

componentWillMount() {
fetch('http://localhost:3000/stocks')
	.then(resp => resp.json())
	.then(listOStocks => {
		this.setState ({ stockList: listOStocks })
    this.setState ({ stocksWeSend: listOStocks })
	})
}

alphaSort = () => {
  let sortedStocks = this.state.stockList.sort((a, b) => a.name.localeCompare(b.name));
      this.setState ({ stocksWeSend: sortedStocks })
}

priceSort = () => {
  let sortedStocks = this.state.stockList.sort((a,b) => a.price - b.price)
      this.setState ({ stocksWeSend: sortedStocks })
}

typeSort = (e) => {
  let filteredStocks = this.state.stockList.filter(stock => stock.type === e.target.value)
      this.setState ({ stocksWeSend: filteredStocks})
}


  render() {

    return (
      <div>
        <Header/>
        <MainContainer typeSort={this.typeSort} priceSort={this.priceSort} alphaSort={this.alphaSort} stockList={this.state.stocksWeSend} />
      </div>
    );
  }
}

export default App;
