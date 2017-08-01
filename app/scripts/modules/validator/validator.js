const Validator = function () {};
Validator.assertNotEmpty = function (value) {
  const list = value.split('\n');
  return value !== '' && list.length > 1;
};

Validator.assertArray = function (value) {
  return Array.isArray(value);
};

Validator.assertFunction = function (value) {
  return typeof value === 'function';
};

export default Validator;
