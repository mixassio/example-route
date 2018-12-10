import React from 'react';
import ProductPage from '../components/views/Product';
import { productPath } from '../helpers/routes';

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductPage id={match.params.id}/>
  ),
};
