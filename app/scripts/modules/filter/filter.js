import FilterResponse from './filter-response';

const Filter = function(serializer) {
  this.serializer = serializer;
}
Filter.filter = function(firstList, secondList) {
  const response = new FilterResponse();
  const duplicatesFromFirstList = [];
  const filteredFirstList = [];
  const duplicatesFromSecondList = [];
  const filteredSecondList = [];
  const duplicatesFromMergedList = [];
  const filteredList = [];

  const sortedFirstList = firstList.sort();
  sortedFirstList.forEach(function(element, index) {
    if (element === sortedFirstList[index + 1]) {
      duplicatesFromFirstList.push(element);
    } else {
      filteredFirstList.push(element);
    }
  });
  const sortedSecondList = secondList.sort();
  sortedSecondList.forEach(function(element, index) {
    if (element === sortedSecondList[index + 1]) {
      duplicatesFromSecondList.push(element);
    } else {
      filteredFirstList.push(element);
    }
  });
  const concatenatedList = filteredFirstList.concat(filteredSecondList);
  const sortedConcatenatedList = concatenatedList.sort();
  sortedConcatenatedList.forEach(function(element, index) {
    if (element === sortedConcatenatedList[index + 1]) {
      duplicatesFromMergedList.push(element);
    } else {
      filteredList.push(element);
      if (sortedConcatenatedList.length === 2) {
        filteredList.push(sortedConcatenatedList[index + 1]);
      }
    }
  });
  return response
    .withFilteredList(filteredList)
    .withDuplicatesFromFirstList(duplicatesFromFirstList)
    .withDuplicatesFromSecondList(duplicatesFromSecondList)
    .withDuplicatesFromMergedList(duplicatesFromMergedList);
}

export default Filter;
