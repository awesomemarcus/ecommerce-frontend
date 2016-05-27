import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsItem from '../components/products_item.jsx';

export const composer = ({context}, onData) => {

  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsItem);
