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
      edit: AdminBro.bundle(
        '../../view/adminBro/components/remove-image.products.tsx',
      ),
    },
  },
  name: {
    position: 1,
  },
  variation: {
    position: 4,
    type: 'string',
    components: {
      show: AdminBro.bundle(
        '../../view/adminBro/components/show-prices.products.tsx',
      ),
    },
  },
  categoryId: {
    type: 'string',
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
  addImage: {
    actionType: ['record'],
    label: 'Adicionar Produto',
    icon: 'View',
    handler: async (request, response, data) => {
      return {
        record: data.record.toJSON(),
      };
    },
    component: AdminBro.bundle(
      '../../view/adminBro/components/upload-image.products.tsx',
    ),
  },
  addAttrs: {
    actionType: ['record'],
    label: 'Adicionar Atributos',
    icon: 'Bag',
    handler: async (request, response, data) => {
      return {
        record: data.record.toJSON(),
      };
    },
    component: AdminBro.bundle(
      '../../view/adminBro/components/create-attrs.products.tsx',
    ),
  },
};

const options = {
  filterProperties: ['name'],
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
