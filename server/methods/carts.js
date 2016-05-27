import {Cart, Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'cartsAddItem'(sessionId, title, price, quantity) {
     check(sessionId, String);
     check(title, String);
     check(price, String);
     check(quantity, String);

     const createdAt = new Date();

     const cartItem = {sessionId, title, price, quantity, createdAt};

     Cart.insert(cartItem);


    },
    'cartsDeleteItem'(cartItemId){
     check(cartItemId, String);

     Cart.remove(cartItemId);

    },
    'cartsDeleteClientItems'(sessionId){
     check(sessionId, String);

     Cart.remove({sessionId: sessionId});

    },

    'ordersAddItem'(cartItems, clientInfo, totalAmount){

     const purchasedDate = new Date();

     Orders.insert({items: cartItems, clientInfo, status: 'pending', purchasedDate: purchasedDate, totalAmount: totalAmount});
    },

  });
}
