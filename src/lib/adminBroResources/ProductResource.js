import AdminBro from 'admin-bro';
import adminBroConfigs from '../../config/adminBro';

/** @type {AdminBro.ResourceOptions} */
const properties = {
  id: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
  },
  image: {
    components: {
      show: AdminBro.bundle(
        '../../view/adminBro/components/show-image.products.tsx',
      ),
    },
  },
  updatedAt: {
    isVisible: false,
  },
  createdAt: {
    isVisible: false,
  },
};

const actions = {
  list: { isAccessible: true },
  search: { isAccessible: false },
};

const options = {
  properties,
  actions,
  parent: adminBroConfigs.parentGroups.productGroup,
  sort: {
    direction: 'desc',
    sortBy: 'id',
  },
};

module.exports = {
  options,
};
