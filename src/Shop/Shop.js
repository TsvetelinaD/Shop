import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './shop.css';

import Table from './Table';
import ProductDetails from './ProductDetails';

export default function Shop() {

  const [allProducts, setProducts] = useState([
    {
      name: 'Nike Metcon',
      isPremium: "yes",
      gender: "male",
      type: 'sneakers',
      color: 'white',
      size: '40',
    },
    {
      name: 'Guess 1981',
      isPremium: "no",
      gender: "female",
      type: 'dress',
      color: 'red',
      size: 'S',
    }
  ]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Table allProducts={allProducts} setProducts={setProducts} />
          </Route>
          <Route path="/product/:index">
            <ProductDetails products={allProducts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}