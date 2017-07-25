const SerializationException = function(message) {
  this.name = 'serialization.exception';
  this.message = message;
  this.getName = function() {
    return this.name;
  }
  this.getMessage = function() {
    return this.message;
  }
}

export default SerializationException;
