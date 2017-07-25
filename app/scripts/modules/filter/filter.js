const Filter = function(serializer) {
  this.serializer = serializer;
}
Filter.filter = function(firstList, secondList) {
  const response = {};

  const duplicatesFromFirstList = [];
  const filteredFirstList = [];
  const duplicatesFromSecondList = [];
  const filteredSecondList = [];
  const duplicatesFromMergeList = [];
  const filteredList = [];

  if (firstList.length > 1) {
    const sortedFirstList = firstList.sort();
    for (let i = 0; i < sortedFirstList.length; i++) {
      if (sortedFirstList[i] === sortedFirstList[i + 1]) {
        duplicatesFromFirstList.push(sortedFirstList[i]);
      } else {
        filteredFirstList.push(sortedFirstList[i]);
      }
    }
  } else {
    filteredFirstList.push(firstList[0]);
  }
  if (secondList.length > 1) {
    const sortedSecondList = secondList.sort();
    for (let i = 0; i < sortedSecondList.length; i++) {
      if (sortedSecondList[i] === sortedSecondList[i + 1]) {
        duplicatesFromSecondList.push(sortedSecondList[i]);
      } else {
        filteredSecondList.push(sortedSecondList[i]);
      }
    }
  } else {
    filteredSecondList.push(secondList[0]);
  }
  const concatenatedList = filteredFirstList.concat(filteredSecondList);
  const sortedConcatenatedList = concatenatedList.sort();
  if (sortedConcatenatedList.length === 2) {
    if (sortedConcatenatedList[0] === sortedConcatenatedList[1]) {
      duplicatesFromMergeList.push(sortedConcatenatedList[1]);
      filteredList.push(sortedConcatenatedList[0]);
    } else {
      filteredList.push(sortedConcatenatedList[0], sortedConcatenatedList[1]);
    }
  } else {
    for (let i = 0; i < sortedConcatenatedList.length; i++) {
      if (sortedConcatenatedList[i] === sortedConcatenatedList[i + 1]) {
        duplicatesFromMergeList.push(sortedConcatenatedList[i]);
      } else {
        filteredList.push(sortedConcatenatedList[i]);
      }
    }
  }
  response.duplicatesFromFirstList = duplicatesFromFirstList;
  response.duplicatesFromSecondList = duplicatesFromSecondList;
  response.duplicatesFromMergeList = duplicatesFromMergeList;
  response.filteredList = filteredList;
  return response;
}

export default Filter;
