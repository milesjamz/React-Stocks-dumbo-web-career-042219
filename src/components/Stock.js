import React from 'react'

const Stock = (props) => (

  <div>

    <div className="card" 
          id={props.stockData.id} 
          onClick={props.buyMe} >
      <div className="card-body" >
        <h5 className="card-title">{
            props.stockData.name
          }</h5>
        <p className="card-text">{
            props.stockData.price
          }</p>
      </div>
    </div>


   </div>
);

export default Stock
