import Application from './modules/application/application';
import ListManager from './modules/list-manager/list-manager';

const manager = new ListManager();
const app = new Application(manager);
app.init();
