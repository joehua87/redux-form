import getValue from './getValue';
const createOnChange =
  (name, change, isReactNative) =>
    (event, callback) => {
      change(name, getValue(event, isReactNative));
      if (typeof callback === 'function') {
        callback();
      }
    };
export default createOnChange;
