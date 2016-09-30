require('handlebars');
require('lodash');

var modalTemplate = require('./productDropDown.handlebars');
var modalApi = 'http://www.bestbuy.ca/api/v2/json/product/';

function getModal(sku) {
    $.ajax({
        url: modalApi + sku,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (data) {
            loadModal(data);
        },
        error: function () {
            alert('Failed!');
        }
    });
}

function loadModal(list) {
    var output = modalTemplate(list);
    $('.product-box.opened .details').empty().append(output);
}

module.exports = getModal;