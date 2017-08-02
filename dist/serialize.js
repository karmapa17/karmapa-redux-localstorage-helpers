'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getSubset = require('./getSubset');

var _getSubset2 = _interopRequireDefault(_getSubset);

var _toJson = require('./toJson');

var _toJson2 = _interopRequireDefault(_toJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return function (storage) {
    return _extends({}, storage, {
      put: function put(key, state, cb) {
        var data = (0, _getSubset2.default)((0, _toJson2.default)(state), props);
        return storage.put(key, data, cb);
      }
    });
  };
};