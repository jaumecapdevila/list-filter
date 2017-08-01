import Validator from '../validator/validator';
import InvalidArrayException from '../validator/exceptions/invalid-array-exception';
import InvalidCallbackException from '../validator/exceptions/invalid-callback-exception';
import InvalidTargetException from '../validator/exceptions/invalid-target-exception';

const EventManager = function() {
  this.addListenersToElement = function(target, events, callback, args) {
    if (!target) {
      throw new InvalidTargetException('Invalid target');
    }
    if (false === Validator.assertArray(events)) {
      throw new InvalidArrayException('Events must be a valid array');
    }
    if (false === Validator.assertFunction(callback)) {
      throw new InvalidCallbackException('The callback must be a valid function');
    }
    if (false === Validator.assertArray(args)) {
      throw new InvalidArrayException('Arguments must be a valid array');
    }
    events.forEach(event => {
      target.addEventListener(event, callback.bind(target, ...args), false);
    });
  };
};

export default EventManager;
