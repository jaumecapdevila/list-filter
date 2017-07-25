import ArraySerializer from '../serializer/serializer';

const ListManager = function() {
  this.firstList = function() {
    const firstList = document.getElementById('first-list');
    return firstList.value;
  }
  this.secondList = function() {
    const secondList = document.getElementById('second-list');
    return secondList.value;
  }
  this.displayLists = function(filterResponse) {
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
    } catch (exception) {
      console.log(exception);
    }
  }
  this.clearLists = function() {
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
  }
}

export default ListManager;
