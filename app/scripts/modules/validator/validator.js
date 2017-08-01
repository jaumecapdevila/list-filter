const Validator = function() {};
Validator.assertNotEmpty = function(value) {
  return value !== '';
};

Validator.assertArray = function(value) {
  return Array.isArray(value);
};

Validator.assertFunction = function(value) {
  return typeof value === 'function';
};

export default Validator;
