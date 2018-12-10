import CatalogPage from '../components/views/Catalog';
import { catalogPath } from '../helpers/routes';

export default {
  path: catalogPath(),
  component: CatalogPage,
  exact: true,
};
