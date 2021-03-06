import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CartsList from '../components/carts_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('cartsItems').ready()){
   const cartItems = Collections.Cart.find().fetch();
   onData(null, {cartItems});
  }

};

export const depsMapper = (context, actions) => ({
  deleteItem: actions.carts.Delete,
  totalPrice: actions.carts.totalPrice,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CartsList);
