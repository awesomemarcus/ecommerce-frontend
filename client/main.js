import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import productsModule from './modules/products';
import cartsModule from './modules/carts';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(productsModule);
app.loadModule(cartsModule);
app.init();
