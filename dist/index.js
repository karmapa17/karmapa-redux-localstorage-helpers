'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = exports.deserialize = undefined;

var _deserialize2 = require('./deserialize');

var _deserialize3 = _interopRequireDefault(_deserialize2);

var _serialize2 = require('./serialize');

var _serialize3 = _interopRequireDefault(_serialize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.deserialize = _deserialize3.default;
exports.serialize = _serialize3.default;