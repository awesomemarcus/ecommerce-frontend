import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import ProductsList from '../components/products_list.jsx';


export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.set('error', 'hello');

    if(Meteor.subscribe('productsList').ready()){
     const products = Collections.ServerProducts.find().fetch();
     onData(null, {error, products});
    }


};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);
