import AdminBro from 'admin-bro';
import adminBroConfigs from '../../config/adminBro';

const properties = {
  id: {
    isTitle: true,
    isVisible: {
      list: true,
      filter: false,
      show: true,
      edit: false,
    },
    type: 'string',
  },
  name: {
    position: 1,
  },
  thumb: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: true,
    },
    components: {
      show: AdminBro.bundle(
        '../../view/adminBro/components/show-image.categories.tsx',
      ),
      edit: AdminBro.bundle(
        '../../view/adminBro/components/remove-image.categories.tsx',
      ),
    },
  },
  updatedAt: {
    isVisible: false,
  },
  createdAt: {
    isVisible: {
      list: true,
      filter: false,
      show: true,
      edit: false,
    },
  },
};

const actions = {
  list: { isAccessible: true },
  search: { isAccessible: false },
  addImage: {
    actionType: ['record'],
    label: 'Adicionar imagem a categoria',
    icon: 'Bag',
    handler: async (request, response, data) => {
      return {
        record: data.record.toJSON(),
      };
    },
    component: AdminBro.bundle(
      '../../view/adminBro/components/upload-image.categories.tsx',
    ),
  },
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
