import SerializationException from './exceptions/serialization-exception';

const ArraySerializer = function() {};

ArraySerializer.serialize = function(value) {
  if (Array !== value.constructor) {
    throw new SerializationException('Cannot serialize an invalid array');
  }
  return value.join("\n");
}
ArraySerializer.deserialize = function(value) {
  if (String !== value.constructor) {
    throw new SerializationException('Cannot deserialize an invalid list');
  }
  return value.split("\n");
}

export default ArraySerializer;
