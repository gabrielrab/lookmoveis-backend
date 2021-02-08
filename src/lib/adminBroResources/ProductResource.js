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
      //   view: AdminBro.bundle(
      //     '../../view/adminBro/components/upload-image-list.tsx',
      //   ),
      show: AdminBro.bundle(
        '../../view/adminBro/components/show-image.products.tsx',
      ),
      //   list: AdminBro.bundle(
      //     '../../view/adminBro/components/upload-image-list.tsx',
      //   ),
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
