module.exports = function (specs, options) {
    
    var groups = {};
    
    _.each(specs, function(spec) {
        if (_.isUndefined(groups[spec.group])) {
            console.log('Define new array', spec.group);
            groups[spec.group] = {
                title: spec.group,
                children: []
            };
        }
        groups[spec.group].children.push(spec);
    });
    
    console.log('Final Group Object', groups);
    return options.fn(groups);
    
}