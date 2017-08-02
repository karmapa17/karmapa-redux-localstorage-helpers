'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSubset;
function hasValue(value) {
  return !!value || 0 === value || false === value;
}

function getSubset(obj, paths) {

  if (!paths) {
    return obj;
  }

  var subset = {};

  paths.forEach(function (path) {

    var keys = path.split('.');
    var length = keys.length;
    var lastIndex = length - 1;

    var index = 0;
    var value = obj;
    var nested = subset;

    // Retrieve value specified by path
    while (value && index < length) {
      value = value[keys[index++]];
    }

    // Add to subset if the specified path is defined and hasValue
    if (index === length && hasValue(value)) {
      keys.forEach(function (key, i) {
        if (i === lastIndex) {
          nested[key] = value;
        } else if (!nested[key]) {
          nested[key] = {};
        }
        nested = nested[key];
      });
    }
  });

  return subset;
}