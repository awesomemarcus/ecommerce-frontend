import {Mongo} from 'meteor/mongo';
import {FS} from 'meteor/cfs:base-package';

const ServerProducts = new Mongo.Collection('products');
const Orders = new Mongo.Collection('orders');
const Cart = new Mongo.Collection('cart');

const Images = new FS.Collection('Images', {
 stores:[new FS.Store.GridFS('Images')],
});

Images.allow({
 download: function(){
  return true;
 },
 insert(userId, doc){
  return true;
 },
 update(userId, doc, fields, modifier){
  return true;
 },
});

export {
  ServerProducts,
  Cart,
  Images,
  Orders,
};
