import app from 'mvsimple-framework';
import { init as router } from './app/routes.js';

router();

app.navigate('/');

window.app = app;