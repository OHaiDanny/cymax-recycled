var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
    render() {
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <figure className="col-md-3">
                            <img src="/assets/img/cymax-recycled-alt.svg" alt="Cymax Recycled" />
                        </figure>
                        <nav className="col-md-6 col-md-push-3">
                            <li>
                                <button data-toggle="modal" data-target="#addProductModal">RECYCLE PRODUCT</button>
                            </li>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = Header;



