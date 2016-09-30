var React = require('react');
var ReactDOM = require('react-dom');

$(document).ready(function() {
    var input = $('#search .search-bar');
    var tagDisplay = $('#tag-display');
    
   input.keypress(function(e) {
       if (e.which == 13) {
           addTag(input);
           input.val('');
       }
   });
    
    tagDisplay.on('click', '.fa-close', function() {
        $(this).closest('li').remove();
    });
    
    function destroyList() {
        console.log('destroy');
    }
});



function addTag(input) {
    var value = input.val();
    $('#tag-display ul').append('<li>' + value + '<i class="fa fa-close"></i></li>')
}

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
                <div id="tag-display" className="row">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        </section>
        
        
        )
    }
});

module.exports = SearchContainer;