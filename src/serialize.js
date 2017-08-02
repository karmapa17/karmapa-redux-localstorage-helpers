import getSubset from './getSubset';
import toJson from './toJson';

export default (props) => (storage) => {
  return {
    ...storage,
    put: (key, state, cb) => {
      const data = getSubset(toJson(state), props);
      return storage.put(key, data, cb);
    }
  };
}
