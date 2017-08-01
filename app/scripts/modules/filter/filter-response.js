import Validator from '../validator/validator';
import ValueObjectException from './exceptions/value-object-exception';

const FilterResponse = function() {
  let filteredList = [];
  let duplicatesFromFirstList = [];
  let duplicatesFromSecondList = [];
  let duplicatesFromMergedList = [];
  this.getFilteredList = function() {
    return filteredList;
  }
  this.getDuplicatesFromFirstList = function() {
    return duplicatesFromFirstList;
  }
  this.getDuplicatesFromSecondList = function() {
    return duplicatesFromSecondList;
  }
  this.getDuplicatesFromMergedList = function() {
    return duplicatesFromMergedList;
  }
  this.withFilteredList = function(value) {
    if (false === Validator.assertArray(value)) {
      throw new ValueObjectException('The filtered list must be a valid array');
    }
    filteredList = value;
    return this;
  };
  this.withDuplicatesFromFirstList = function(value) {
    if (false === Validator.assertArray(value)) {
      throw new ValueObjectException('The duplicated values from the first list must be a valid array');
    }
    duplicatesFromFirstList = value;
    return this;
  };
  this.withDuplicatesFromSecondList = function(value) {
    if (false === Validator.assertArray(value)) {
      throw new ValueObjectException('The duplicated values from the second list must be a valid array');
    }
    duplicatesFromSecondList = value;
    return this;
  };
  this.withDuplicatesFromMergedList = function(value) {
    if (false === Validator.assertArray(value)) {
      throw new ValueObjectException('The duplicated values from the merged list must be a valid array');
    }
    duplicatesFromMergedList = value;
    return this;
  };
};

export default FilterResponse;
