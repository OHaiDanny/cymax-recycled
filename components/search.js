var React = require('react');
var ReactDOM = require('react-dom');

var SearchContainer = React.createClass({
    render() {
        return (
        
        <section id="search">
            <div className="container">
                <div id="search-select" className="row">
                    <h1 className="col-sm-3">Search in:</h1>
                    <div id="select-container" className="col-sm-8">
                        <i className="fa fa-caret-down"></i>
                        <select>
                            <option>Vancouver, Canada</option>
                            <option>Los Angeles, CA</option>
                            <option>Austin, TX</option>
                        </select>
                    </div>
                </div>
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