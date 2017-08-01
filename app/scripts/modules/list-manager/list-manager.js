import ArraySerializer from '../serializer/serializer';

const ListManager = function () {
  this.firstList = document.getElementById('first-list');
  this.secondList = document.getElementById('second-list');
  this.listErrorMessage = document.getElementById('list-error-mesage');
  this.invalidFirstListValue = function () {
    this.firstList.classList.add('invalid-list');
    this.listErrorMessage.style.display = 'block';
  };
  this.invalidSecondListValue = function () {
    this.secondList.classList.add('invalid-list');
    this.listErrorMessage.style.display = 'block';
  };
  this.validFirstListValue = function () {
    this.firstList.classList.remove('invalid-list');
    this.listErrorMessage.style.display = 'none';
  };
  this.validSecondListValue = function () {
    this.secondList.classList.remove('invalid-list');
    this.listErrorMessage.style.display = 'none';
  };
  this.displayLists = function (filterResponse) {
    const filteredList = document.getElementById('filtered-list');
    const duplicatesFirstList = document.getElementById('duplicates-first-list');
    const duplicatesSecondList = document.getElementById('duplicates-second-list');
    const duplicatesMergeList = document.getElementById('duplicates-merge-list');
    const filteredListContainer = document.getElementById('filtered-list-container');
    const duplicatesListContainer = document.getElementById('duplicates-list-container');
    filteredListContainer.style.display = 'block';
    duplicatesListContainer.style.display = 'block';
    try {
      filteredList.value = ArraySerializer.serialize(filterResponse.filteredList);
      duplicatesFirstList.value = ArraySerializer.serialize(filterResponse.duplicatesFromFirstList);
      duplicatesSecondList.value = ArraySerializer.serialize(filterResponse.duplicatesFromSecondList);
      duplicatesMergeList.value = ArraySerializer.serialize(filterResponse.duplicatesFromMergeList);
    } catch (exception) {}
  };
  this.clearLists = function () {
    const firstList = document.getElementById('first-list');
    const secondList = document.getElementById('second-list');
    const filteredList = document.getElementById('filtered-list');
    const duplicatesFirstList = document.getElementById('duplicates-first-list');
    const duplicatesSecondList = document.getElementById('duplicates-second-list');
    const duplicatesMergeList = document.getElementById('duplicates-merge-list');
    const filteredListContainer = document.getElementById('filtered-list-container');
    const duplicatesListContainer = document.getElementById('duplicates-list-container');
    firstList.value = '';
    secondList.value = '';
    filteredList.value = '';
    duplicatesFirstList.value = '';
    duplicatesSecondList.value = '';
    duplicatesMergeList.value = '';
    filteredListContainer.style.display = 'none';
    duplicatesListContainer.style.display = 'none';
  };
};

export default ListManager;
