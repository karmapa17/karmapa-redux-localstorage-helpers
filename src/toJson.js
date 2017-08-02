import get from 'lodash.get';

export default function toJson(data) {
  return Object.entries(data)
    .reduce((obj, [prop, value]) => {
      const hasToJson = ('function' === typeof get(value, 'toJSON'));
      obj[prop] = hasToJson ? value.toJSON() : value;
      return obj;
    }, {});
}
