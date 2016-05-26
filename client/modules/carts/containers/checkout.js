import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Checkout from '../components/checkout.jsx';

export const composer = ({context, sessionId}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe("clientCartItems", sessionId).ready()){

   const cartItems = Collections.Cart.find({sessionId:sessionId}).fetch();

   onData(null, {cartItems});

  }

};

export const depsMapper = (context, actions) => ({
  addOrder: actions.carts.addOrder,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Checkout);
