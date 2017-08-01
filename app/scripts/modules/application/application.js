import ArraySerializer from '../serializer/serializer';
import Validator from '../validator/validator';
import Filter from '../filter/filter';
import InvalidListException from '../exceptions/invalid-list-exception';

const Application = function (listManager, eventManager) {
  this.listManager = listManager;
  this.eventManager = eventManager;
  this.init = function () {
    const clearButton = document.getElementById('clear-button');
    this.eventManager.addMultipleListenersToTarget(
      this.listManager.firstList,
      ['focus', 'blur'],
      function (manager) {
        if (false === Validator.assertNotEmpty(this.value)) {
          manager.invalidFirstListValue();
        } else {
          manager.validFirstListValue();
        }
      },
      [this.listManager]
    );
    this.eventManager.addMultipleListenersToTarget(
      listManager.secondList,
      ['focus', 'blur'],
      function (manager) {
        if (false === Validator.assertNotEmpty(this.value)) {
          manager.invalidSecondListValue();
        } else {
          manager.validSecondListValue();
        }
      },
      [listManager]
    );
    this.eventManager.addListenerToTarget(
      document.getElementById('filter-button'),
      'click',

    );
    filterButton.addEventListener('click', () => {
      try {

        if (false === Validator.assertNotEmpty(firstListValue)) {
          throw new InvalidListException('First list cannot be empty');
        }
        if (false === Validator.assertNotEmpty(secondListValue)) {
          throw new InvalidListException('Second list cannot be empty');
        }
        const filterResponse = Filter.filter(
          ArraySerializer.deserialize(firstListValue),
          ArraySerializer.deserialize(secondListValue)
        );
        this.listManager.displayLists(filterResponse);
      } catch (exception) {}
    });
    clearButton.addEventListener('click', () => {
      this.listManager.clearLists();
    });
  };
};

export default Application;
