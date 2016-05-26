import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import CartsList from './containers/carts_list.js';
import Checkout from './containers/checkout.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/carts/list', {
    name: 'carts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CartsList />),
      });
    },
  });

  FlowRouter.route('/carts/checkout/:sessionId', {
   name: 'cart.checkout',
   action(params) {
    mount(MainLayoutCtx, {
     content: () => (<Checkout sessionId={params.sessionId} />),
    })
   },
  })
}
