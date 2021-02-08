import adminBroConfigs from '../../config/adminBro';

const properties = {
  id: {
    isVisible: {
      list: true,
      filter: false,
      show: true,
      edit: false,
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
