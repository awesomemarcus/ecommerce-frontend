import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // FlowRouter.route('/', {
  //   name: '',
  //   action() {
  //     mount(MainLayoutCtx, {
  //       content: () => (<ProductsList />),
  //     });
  //   },
  // });
}
