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
  parent: adminBroConfigs.parentGroups.management,
  sort: {
    direction: 'desc',
    sortBy: 'id',
  },
};

module.exports = {
  options,
};
