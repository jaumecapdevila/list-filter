const ListManager = function(firstListObject, secondListObject) {
  this.firstList = function() {
    const firstList = document.getElementById('first-list');
    return firstList.value
  }
  this.setFirstList = function(value) {
    const firstList = document.getElementById('first-list');
    firstList.value = value;
  }
  this.secondList = function() {
    const secondList = document.getElementById('second-list');
    return secondList.value
  }
  this.setSecondList = function(value) {
    const secondList = document.getElementById('second-list');
    secondList.value = value;
  }
  this.setFilteredList = function(value) {
    const filteredList = document.getElementById('filtered-list');
    const filteredListContainer = document.getElementById('filtered-list-container');
    filteredList.value = value;
    filteredListContainer.style.display = 'block';
  }
  this.setItemsRemovedList = function(value) {
    const itemsRemovedList = document.getElementById('items-removed-list');
    const itemsRemovedListContainer = document.getElementById('items-removed-list-container');
    itemsRemovedList.value = value;
    itemsRemovedListContainer.style.display = 'block';
  }
  this.hideLists = function(value) {
    const filteredList = document.getElementById('filtered-list');
    const filteredListContainer = document.getElementById('filtered-list-container');
    const itemsRemovedList = document.getElementById('items-removed-list');
    const itemsRemovedListContainer = document.getElementById('items-removed-list-container');
    itemsRemovedList.value = '';
    itemsRemovedListContainer.style.display = 'none';
    filteredList.value = '';
    filteredListContainer.style.display = 'none';
  }
}

export default ListManager;
