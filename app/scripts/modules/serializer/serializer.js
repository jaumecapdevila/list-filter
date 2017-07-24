const ArraySerializer = function() {};
ArraySerializer.serialize = function(listArray) {
  return listArray.join("\n");
}
ArraySerializer.deserialize = function(list) {
  return list.split("\n");
}
export default ArraySerializer;
