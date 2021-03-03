import adminBroConfigs from '../../config/adminBro';

const properties = {
  id: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
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
  parent: adminBroConfigs.parentGroups.customerGroup,
  sort: {
    direction: 'desc',
    sortBy: 'firstName',
  },
};

module.exports = {
  options,
};
