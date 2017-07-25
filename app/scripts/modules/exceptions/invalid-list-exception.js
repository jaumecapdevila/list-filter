const InvalidListException = function(message) {
  this.name = 'invalid.list.exception';
  this.message = message;
  this.getName = function() {
    return this.name;
  }
  this.getMessage = function() {
    return this.message;
  }
}

export default InvalidListException;
