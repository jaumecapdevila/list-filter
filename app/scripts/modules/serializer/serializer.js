import SerializationException from '../exceptions/serialization-exception';

const ArraySerializer = function() {};
ArraySerializer.serialize = function(listArray) {
  if (Array !== listArray.constructor) {
    throw new SerializationException('Cannot serialize an invalid array');
  }
  return listArray.join("\n");
}
ArraySerializer.deserialize = function(list) {
  if (String !== list.constructor) {
    throw new SerializationException('Cannot deserialize an invalid list');
  }
  return list.split("\n");
}

export default ArraySerializer;
