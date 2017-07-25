import ArraySerializer from '../serializer/serializer';
import Validator from '../validator/validator';
import Filter from '../filter/filter';
import InvalidListException from '../exceptions/invalid-list-exception';

const Application = function(manager) {
  this.manager = manager;
  this.init = function() {
    const filterButton = document.getElementById('filter-button');
    const clearButton = document.getElementById('clear-button');
    filterButton.addEventListener('click', () => {
      try {
        const firstListValue = this.manager.firstList();
        const secondListValue = this.manager.secondList();
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
        this.manager.displayLists(filterResponse);
      } catch (exception) {}
    });
    clearButton.addEventListener('click', () => {
      this.manager.clearLists();
    });
  }
}

export default Application;
