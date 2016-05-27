import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CartsButton from '../components/carts_button.jsx';

export const composer = ({context}, onData) => {

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  addItemToCart: actions.carts.Add,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CartsButton);
