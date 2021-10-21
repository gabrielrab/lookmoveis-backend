import adminBroConfigs from '../../config/adminBro';

const properties = {
  id: {
    isTitle: true,
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
    type: 'string',
  },
  productId: {
    position: 1,
    type: 'string',
  },
  name: {
    position: 2,
  },
  description: {
    position: 3,
  },
  updatedAt: {
    isVisible: false,
  },
  createdAt: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
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
