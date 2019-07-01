import React from 'react';

class SearchBar extends React.Component {

  state = {

      alphaFilter: false,
      numberFilter: false
  }


    handleAlphaChange = () => {
      this.setState ({ alphaFilter: !this.state.alphaFilter, numberFilter: this.state.alphaFilter })
    }

    handleNumberChange = () => {
      this.setState ({ alphaFilter: this.state.numberFilter, numberFilter: !this.state.numberFilter })
    }

  render() {

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" 
        value="Alphabetically" 
        checked={this.state.alphaFilter} 
        onChange={this.handleAlphaChange}
        onClick={this.props.alphaSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" 
               value="Price" 
               checked={this.state.numberFilter} 
               onChange={this.handleNumberChange}
               onClick={this.props.priceSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.props.typeSort}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
    );
  }
}

export default SearchBar;
