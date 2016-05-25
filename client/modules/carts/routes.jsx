import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import CartsList from './containers/carts_list.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/carts/list', {
    name: '',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CartsList />),
      });
    },
  });
}
