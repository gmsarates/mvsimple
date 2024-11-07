import app from 'mvsimple-framework';
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";

export function init() {
    app.registerRoute('/', homeController);
    app.registerRoute('/user', userController);
}
