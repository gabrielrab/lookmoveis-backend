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
    type: 'string',
  },
  value: {
    position: 2,
    type: 'string',
  },
  productId: {
    position: 3,
    type: 'integer',
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
