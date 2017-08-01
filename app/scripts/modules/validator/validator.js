const Validator = function() {};

Validator.assertNotEmpty = function(value) {
  return value !== '';
};

Validator.assertArray = function(value) {
  return Array !== value.constructor;
};

Validator.assertFunction = function(value) {
  return typeof value === 'function';
};

export default Validator;
