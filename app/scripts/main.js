import ListManager from './modules/list-manager/list-manager';
import EventManager from './modules/events/event-manager';

const listManager = new ListManager();
const eventManager = new EventManager();

document.addEventListener("DOMContentLoaded", function(event) {
  eventManager.addListenersToElement(
    document.getElementById('filter-button'), ['click'],
    function(manager) {
      manager.filterLists()
    }, [listManager]
  );
  eventManager.addListenersToElement(
    document.getElementById('clear-button'), ['click'],
    function(manager) {
      manager.clearLists();
    }, [listManager]
  );
  eventManager.addListenersToElement(
    document.getElementById('first-list'), ['focus', 'blur'],
    function(manager) {
      manager.validateFirstList(this.value)
    }, [listManager]
  );
  eventManager.addListenersToElement(
    document.getElementById('second-list'), ['focus', 'blur'],
    function(manager) {
      manager.validateSecondList(this.value)
    }, [listManager]
  );
});
