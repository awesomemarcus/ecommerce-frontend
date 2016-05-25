import {Mongo} from 'meteor/mongo';

const ServerProducts = new Mongo.Collection('products');
const Cart = new Mongo.Collection('cart');

export {
  ServerProducts,
  Cart,
};
