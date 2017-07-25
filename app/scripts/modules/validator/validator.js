const Validator = function() {};
Validator.assertNotEmpty = function(value) {
  return value !== '';
}

export default Validator;
