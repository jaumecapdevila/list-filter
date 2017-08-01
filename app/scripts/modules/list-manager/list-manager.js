import ArraySerializer from '../serializer/serializer';
import Filter from '../filter/filter';
import Validator from '../validator/validator';

const ListManager = function() {
  const firstList = document.getElementById('first-list');
  const secondList = document.getElementById('second-list');
  const filteredList = document.getElementById('filtered-list');
  const duplicatesFirstList = document.getElementById('duplicates-first-list');
  const duplicatesSecondList = document.getElementById('duplicates-second-list');
  const duplicatesMergeList = document.getElementById('duplicates-merge-list');
  const filteredListContainer = document.getElementById('filtered-list-container');
  const duplicatesListContainer = document.getElementById('duplicates-list-container');
  const listErrorMessage = document.getElementById('list-error-mesage');

  this.validateFirstList = function(value) {
    if (false === Validator.assertNotEmpty(value)) {
      firstList.classList.add('invalid-list');
      listErrorMessage.style.display = 'block';
      return;
    }
    firstList.classList.remove('invalid-list');
    listErrorMessage.style.display = 'none';
  }
  this.validateSecondList = function(value) {
    if (false === Validator.assertNotEmpty(value)) {
      secondList.classList.add('invalid-list');
      listErrorMessage.style.display = 'block';
      return;
    }
    secondList.classList.remove('invalid-list');
    listErrorMessage.style.display = 'none';
  }
  this.filterLists = function() {
    try {
      if (!Validator.assertNotEmpty(firstList.value) ||
        !Validator.assertNotEmpty(secondList.value)
      ) {
        return;
      }
      const filterResponse = Filter.filter(
        ArraySerializer.deserialize(firstList.value),
        ArraySerializer.deserialize(secondList.value)
      );
      filteredList.value = ArraySerializer.serialize(filterResponse.getFilteredList());
      duplicatesFirstList.value = ArraySerializer.serialize(filterResponse.getDuplicatesFromFirstList());
      duplicatesSecondList.value = ArraySerializer.serialize(filterResponse.getDuplicatesFromSecondList());
      duplicatesMergeList.value = ArraySerializer.serialize(filterResponse.getDuplicatesFromMergedList());
      this.displayLists();
    } catch (exception) {
      console.log(exception);
    }
  }
  this.displayLists = function() {
    filteredListContainer.style.display = 'block';
    duplicatesListContainer.style.display = 'block';
  };
  this.clearLists = function() {
    firstList.value = '';
    secondList.value = '';
    filteredList.value = '';
    duplicatesFirstList.value = '';
    duplicatesSecondList.value = '';
    duplicatesMergeList.value = '';
  };
  this.hideLists = function() {
    filteredListContainer.style.display = 'none';
    duplicatesListContainer.style.display = 'none';
  };
};

export default ListManager;
