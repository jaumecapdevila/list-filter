import Application from './modules/application/application';
import ListManager from './modules/list-manager/list-manager';
import EventManager from './modules/events/event-manager';

const listManager = new ListManager();
const eventManager = new EventManager();
const app = new Application(listManager, eventManager);
app.init();
