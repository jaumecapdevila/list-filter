const ValueObjectException = function(message) {
  this.name = 'value_object.exception';
  this.message = message;
  this.getName = function() {
    return this.name;
  };
  this.getMessage = function() {
    return this.message;
  };
};

export default ValueObjectException;
