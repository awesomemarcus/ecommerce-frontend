import {Cart} from '/lib/collections';
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


    }
  });
}
