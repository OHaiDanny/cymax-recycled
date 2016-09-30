var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
    render() {
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <figure className="col-md-3">
                            <img src="/assets/img/cymax-recycled.svg" alt="Cymax Recycled" />
                        </figure>
                        <nav className="col-md-6 col-md-push-3">
                            <li>
                                <button>RECYCLE PRODUCT</button>
                            </li>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = Header;



