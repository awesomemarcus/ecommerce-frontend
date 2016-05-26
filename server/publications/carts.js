import {Cart} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('cartsItems', function () {
    return Cart.find();
  });

  Meteor.publish('clientCartItems', function(sessionId){
   check(sessionId, String);
   
   return Cart.find({sessionId: sessionId});
  })
}
