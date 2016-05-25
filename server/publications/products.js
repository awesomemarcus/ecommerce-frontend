import {ServerProducts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const ServerConnect = DDP.connect('http://127.0.0.1:3000/');

export default function () {
  Meteor.publish('productsList', function () {
    return ServerProducts.find();
  });
}
