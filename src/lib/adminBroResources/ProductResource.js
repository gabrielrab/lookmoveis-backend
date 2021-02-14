import AdminBro from 'admin-bro';
import adminBroConfigs from '../../config/adminBro';

/** @type {AdminBro.ResourceOptions} */
const properties = {
  id: {
    isTitle: true,
    isVisible: {
      list: true,
      filter: false,
      show: false,
      edit: false,
    },
    type: 'string',
  },
  image: {
    components: {
      show: AdminBro.bundle(
        '../../view/adminBro/components/show-image.products.tsx',
      ),
    },
  },
  name: {
    position: 1,
  },
  categoryId: {
    reference: 'categories',
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
