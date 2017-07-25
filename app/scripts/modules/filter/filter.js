const Filter = function(serializer) {
  this.serializer = serializer;
}
Filter.filter = function(firstList, secondList) {
  const response = {};
  const repeatedItems = [];
  const itemsToConcat = [];
  for (let i = 0; i < firstList.length; i++) {
    for (let k = 0; k < secondList.length; k++) {
      if (firstList[i] === secondList[k]) {
        repeatedItems.push(secondList[k]);
      } else {
        itemsToConcat.push(secondList[k]);
      }
    }
    const finalList = firstList.concat(itemsToConcat);
    response.repeatedItems = repeatedItems;
    response.filteredList = finalList;
    return response;
  }
}

export default Filter;
