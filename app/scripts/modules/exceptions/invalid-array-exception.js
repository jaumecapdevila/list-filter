const InvalidArrayException = function (message) {
  this.name = 'invalid.array.exception';
  this.message = message;
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
};

export default InvalidArrayException;
