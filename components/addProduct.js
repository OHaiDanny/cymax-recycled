var React = require('react');
var ReactDOM = require('react-dom');

var AddProductModal = React.createClass({
    render() {
        return (
        
            <div className="modal fade" id="addProductModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h1 className="modal-title">Recycle New Product</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="productName">Name of Product</label>
                                        <input type="email" className="form-control" id="productName" aria-describedby="addProduct" placeholder="Ashley Furniture Sofa" /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="Price">Price</label>
                                        <input type="email" className="form-control" id="Price" aria-describedby="addProduct" placeholder="520.25" /> 
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="Tag">Tags</label>
                                        <input type="email" className="form-control" id="Tag" aria-describedby="addProduct" placeholder="Sofa, Ashley Furniture" /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="productDescription">Product Description</label>
                                        <textarea className="form-control" rows="5" id="productDescription"></textarea>
                                    </div>
                                </div>
                                <fieldset>
                                  <legend>Payment</legend>
                                  <div className="form-group row">
                                    <label className="col-sm-3 control-label" htmlFor="card-holder-name">Name on Card</label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" name="card-holder-name" id="card-holder-name" placeholder="Card Holder's Name" />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-sm-3 control-label" htmlFor="card-number">Card Number</label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" name="card-number" id="card-number" placeholder="Debit/Credit Card Number" />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-sm-3 control-label" htmlFor="expiry-month">Expiration Date</label>
                                    <div className="col-sm-9">
                                      <div className="row">
                                        <div className="col-xs-3">
                                          <select className="form-control col-sm-2" name="expiry-month" id="expiry-month">
                                            <option>Month</option>
                                            <option value="01">Jan (01)</option>
                                            <option value="02">Feb (02)</option>
                                            <option value="03">Mar (03)</option>
                                            <option value="04">Apr (04)</option>
                                            <option value="05">May (05)</option>
                                            <option value="06">June (06)</option>
                                            <option value="07">July (07)</option>
                                            <option value="08">Aug (08)</option>
                                            <option value="09">Sep (09)</option>
                                            <option value="10">Oct (10)</option>
                                            <option value="11">Nov (11)</option>
                                            <option value="12">Dec (12)</option>
                                          </select>
                                        </div>
                                        <div className="col-xs-3">
                                          <select className="form-control" name="expiry-year">
                                            <option value="13">2013</option>
                                            <option value="14">2014</option>
                                            <option value="15">2015</option>
                                            <option value="16">2016</option>
                                            <option value="17">2017</option>
                                            <option value="18">2018</option>
                                            <option value="19">2019</option>
                                            <option value="20">2020</option>
                                            <option value="21">2021</option>
                                            <option value="22">2022</option>
                                            <option value="23">2023</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-sm-3 control-label" htmlFor="cvv">Card CVV</label>
                                    <div className="col-sm-3">
                                      <input type="text" className="form-control" name="cvv" id="cvv" placeholder="Security Code" />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-sm-3 control-label" htmlFor="dateListed">Days Listed</label>
                                    <div className="col-sm-3">
                                      <select className="form-control" name="daysListed">
                                            <option value="24">1 week ($5.99)</option>
                                            <option value="25">1 month ($18.99)</option>
                                            <option value="26">3 months ($40.99)</option>
                                          </select>
                                    </div>
                                  </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Recycle</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddProductModal;