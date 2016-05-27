import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Email} from 'meteor/email';

export default function () {
  Meteor.methods({
    'emailPurchased'(cartItems, clientInfo) {

     var items = [];

     cartItems.map( item => {

      items.push('<li>' + item.title + '</li>')

     });


     Email.send({
      to: clientInfo.email,
      from: "marcus@snapzio.com",
      subject: "Example Email",
      html: "Hello " + clientInfo.firstName + " " + clientInfo.lastName + ", Your orders are <ul>" + items + "</ul>",
     });

    },

  });
}
