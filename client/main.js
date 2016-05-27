import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import productsModule from './modules/products';
import cartsModule from './modules/carts';
import categoriesModule from './modules/categories';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(productsModule);
app.loadModule(cartsModule);
app.loadModule(categoriesModule);
app.init();
