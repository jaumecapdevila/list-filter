const InvalidCallbackExceptionn = function (message) {
  this.name = 'invalid.callback.exception';
  this.message = message;
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
};

export default InvalidCallbackExceptionn;
