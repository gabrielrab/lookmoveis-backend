import database from '../../database';
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
  name: {
    isVisible: { list: true, filter: true, show: true, edit: true },
    type: 'text',
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
    sortBy: 'id',
  },
};

module.exports = {
  resource: database.models.Addresses,
  options,
};
