import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import ProductsList from '../components/products_list.jsx';


export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  const filter = (LocalState.get('filter')) ? LocalState.get('filter') : {};

    if(Meteor.subscribe('productsList').ready()){
     const products = Collections.ServerProducts.find(filter).fetch();
     onData(null, {products});
    }


};

export const depsMapper = (context, actions) => ({
  filterText: actions.products.filterQuery,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);
