const Filter = function(serializer) {
  this.serializer = serializer;
}
Filter.filter = function(firstList, secondList) {
  const response = {};

  const repeatedItemsInFirsList = [];
  const filteredFirstList = [];
  const repeatedItemsInSecondList = [];
  const filteredSecondList = [];
  const repeatedItemsInMerge = [];
  const finalList = [];

  if (firstList.length > 1) {
    const sortedFirstList = firstList.sort();
    for (let i = 0; i < sortedFirstList.length - 1; i++) {
      if (sortedFirstList[i + 1] === sortedFirstList[i]) {
        if (sortedFirstList[i + 1] !== sortedFirstList[i + 2]) {
          filteredFirstList.push(sortedFirstList[i + 1]);
        }
        repeatedItemsInFirsList.push(sortedFirstList[i]);
      } else {
        filteredFirstList.push(sortedFirstList[i]);
      }
    }
  } else {
    filteredFirstList.push(firstList[0]);
  }
  if (secondList.length > 1) {
    const sortedSecondList = secondList.sort();
    for (let i = 0; i < sortedSecondList.length - 1; i++) {
      if (sortedSecondList[i + 1] === sortedSecondList[i]) {
        if (sortedFirstList[i + 1] !== sortedFirstList[i + 2]) {
          filteredSecondList.push(sortedFirstList[i + 1]);
        }
        repeatedItemsInSecondList.push(sortedSecondList[i]);
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
      finalList.push(sortedConcatenatedList[0]);
    } else {
      finalList.push(sortedConcatenatedList[0], sortedConcatenatedList[1]);
    }
  } else {
    for (let i = 0; i < sortedConcatenatedList.length - 1; i++) {
      if (sortedConcatenatedList[i + 1] === sortedConcatenatedList[i]) {
        if (sortedConcatenatedList[i + 1] !== sortedConcatenatedList[i + 2]) {
          finalList.push(sortedConcatenatedList[i + 1]);
        }
        repeatedItemsInMerge.push(sortedConcatenatedList[i]);
      } else {
        finalList.push(sortedConcatenatedList[i]);
      }
    }
  }
  response.repeatedItemsInFirsList = repeatedItemsInFirsList;
  response.repeatedItemsInSecondList = repeatedItemsInSecondList;
  response.repeatedItemsInMerge = repeatedItemsInMerge;
  response.finalList = finalList;
  return response;
}

export default Filter;
