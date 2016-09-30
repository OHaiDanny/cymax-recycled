var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('../components/header');
var Spacer = require('../components/spacer');
var Search = require('../components/search');
var ProductList = require('../components/products/products');
var AddProductModal = require('../components/addProduct');

require('bootstrap-webpack');
require("../sass/style.scss");
require('../components/products/products.js');

var CymaxRecycled = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <Header />
        <Spacer />
        <Search />
        <ProductList />
        <AddProductModal />
      </div>
    )
  }
});

ReactDOM.render(<CymaxRecycled />, document.getElementById('App'));

