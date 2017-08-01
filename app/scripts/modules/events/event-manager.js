import Validator from '../validator/validator';
import InvalidArrayException from '../exceptions/invalid-array-exception';
import InvalidCallbackException from '../exceptions/invalid-callback-exception';
import InvalidTargetException from '../exceptions/invalid-target-exception';

const EventManager = function () {
  this.addMultipleListenersToTarget = function (target, events, callback, args) {
    if (false === Validator.assertArray(events)) {
      throw new InvalidArrayException('Events must be a valid array');
    }
    if (false === Validator.assertArray(args)) {
      throw new InvalidArrayException('Arguments must be a valid array');
    }
    if (!target) {
      throw new InvalidTargetException('Invalid target');
    }
    if (false === Validator.assertFunction(callback)) {
      throw new InvalidCallbackException('The callback must be a valid function');
    }
    events.forEach(event => {
      target.addEventListener(event, callback.bind(target, ...args), false);
    });
  };
  this.addListenerToTarget = function (target, event, callback, args) {
    if (false === Validator.assertArray(args)) {
      throw new InvalidArrayException('Arguments must be a valid array');
    }
    if (!target) {
      throw new InvalidTargetException('Invalid target');
    }
    target.addEventListener(event, callback.bind(target, ...args), false);
  };
};

export default EventManager;
