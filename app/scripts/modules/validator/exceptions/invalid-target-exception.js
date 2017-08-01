const InvalidTargetException = function (message) {
  this.name = 'invalid.target.exception';
  this.message = message;
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
};

export default InvalidTargetException;
