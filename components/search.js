var React = require('react');
var ReactDOM = require('react-dom');

var SearchContainer = React.createClass({
    render() {
        return (
        
        <section id="search">
            <div className="container">
                <div className="row">
                    <i className="fa fa-search"></i>
                    <input className="search-bar" type="text" placeholder="Search Products, Price, Tags, SKU, etc." />
                </div>
            </div>
        </section>
        
        
        )
    }
});

module.exports = SearchContainer;