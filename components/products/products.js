var React = require('react');
var ReactDom = require('react-dom');
require('handlebars');
require('lodash');

var productsTemplate = require('./productCatalog.handlebars');
var productsList = [
        {
            image: 'https://media.cymaxstores.com/Images/1453/490267-L.jpg',
            name: 'Abbyson Living Beverly Leather Sofa in Espresso',
            price: 1234.97,
            sku: 'SK-9060-BRN-3',
            description: 'Perfectly tailored and grandly proportioned this sofa is designed to bring elegance and comfort to any living room. High resiliency foam cushions are wrapped in a Dacron fill for superior comfort and support. Its durable kiln-dried hardwood frame is handled with a great deal of care and is put together by a unique and highly skilled craftsman to ensure longevity and strength as well as long-term comfort and satisfaction. Soft and supple top-grain upholstery is finished off with brass nail-head trims giving this piece a timeless look.'
        }, {
            image: 'https://media.cymaxstores.com/Images/69/526968-L.jpg',
            name: 'Lifestyle Solutions Hartford Microfiber Sofa in Black',
            price: 299.99,
            sku: 'CCHRFKS3M26BKVA',
            description: 'Providing a comforting, seating experience in the living room with unmatched quality fabric. While supported by a sustainable, durable sofa frame construction.'
        }, {
            image: 'https://media.cymaxstores.com/Images/1453/490230-L.jpg',
            name: 'Abbyson Living Barclay Leather Sofa in Espresso',
            price: 1777.40,
            sku: 'CI-N180-BRN-3',
            description: 'Perfectly tailored and grandly proportioned this sofa is designed to bring elegance and comfort to any living room. High resiliency foam cushions are wrapped in a Dacron fill for superior comfort and support. Its durable kiln-dried hardwood frame is handled with a great deal of care and is put together by a unique and highly skilled craftsman to ensure longevity and strength as well as long-term comfort and satisfaction. Soft and supple top-grain upholstery is finished off with brass nail-head trims giving this piece a timeless look.'
        }, {
            image: 'https://media.cymaxstores.com/Images/3811/491168-L.jpg',
            name: 'Skyline Furniture Tufted Chaise Lounge in White',
            price: 495.95,
            sku: '6006ESPVLVWHT',
            description: 'This gracefully designed Chaise Lounge is the perfect addition to any room. With its beautiful swooping curves and velvet uphosltry, it combines comfort and elegance. The Skyline Chaise Lounge is the perfect solution for your furnishing needs.'
        }, {
            image: 'https://media.cymaxstores.com/Images/1087/524729-L.jpg',
            name: 'Diamond Sofa Bellini Fabric Accent Chair in Purple',
            price: 532.99,
            sku: 'BELLINICHPR',
            description: "Add a chic elegance to your home with the Bellini Collection by Diamond Sofa. A mix of modern style with old Hollywood Charm, the Bellini Collection has everything you need to add a touch of glamour to your home's décor. With its soft curves, tufted seat backs and supple patterned velvety fabric, stylish comfort is the result."
        }, {
            image: 'https://media.cymaxstores.com/Images/3906/526431-L.jpg',
            name: 'Ashley Furniture Axiom 2 Piece Leather Accent Chair Set in Walnut',
            price: 1674.67,
            sku: '42000-23-14-PKG',
            description: 'Frame constructions have been tested with various equipment to simulate the home and transportation environments to insure durability. Corners are glued, blocked and stapled. Seats and back spring rails are cut from 7/8” hardwood. Stripes and patterns are match cut. All fabrics are pre-approved for wearability and durability against AHFA standards. Features UltraPlush seating.'
        }
];

$(document).ready(function() {
    productClickListener();
})

function productClickListener() {
    $('.product-box').on('click', function () {
        $(this).toggleClass('opened').find('.details').slideToggle(300);
    });
}

var ProductList = React.createClass({
    getInitialState: function() {
        return {
            products: []
        }
    },
    componentDidMount: function() {
        console.log('mounted');  
        this.setState({
            products: productsList
        });
    },
    render() {
        return (
            <div id="product-container" className="container">
                <div className="row">
                    <div id="products" className="col-sm-12">
                        {this.state.products.map(function(product){
                           return (
                                <div key={product.sku} className="col-sm-12 product-box">
                                    <section className="mini-content">
                                        <figure className="col-sm-1">
                                            <img src={product.image} alt="{product.name}" />
                                        </figure>
                                        <section className="col-sm-7">
                                            <h5>{product.name}</h5>
                                        </section>
                                        <div className="col-sm-3">
                                            <p className="salePrice"><strong>${product.price}</strong></p>
                                        </div>
                                        <div className="col-sm-1">
                                            <div className="arrow">
                                                <i className="fa fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="details">
                                        <div className="row">
                                            <h3>{product.name}</h3>
                                            <div className="col-md-6">
                                                <img src={product.image} alt="{product.name}" />
                                            </div>
                                            <div className="col-md-6">
                                                <section id="product-description">
                                                    <h4>Overview</h4>
                                                    <p>{product.description}</p>
                                                    <div id="product-info">
                                                        <p><strong>SKU:</strong><span> {product.sku}</span></p>
                                                    </div>
                                                    <button className="btn btn-primary btn-success">Buy Item</button>
                                                </section>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ProductList;