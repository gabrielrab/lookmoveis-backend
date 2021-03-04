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
  paymentTerms: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
  },
  nfNumber: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
  },
  note: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
  },
  clientId: {
    reference: 'clients',
  },
  addressId: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
    reference: 'addresses',
  },
  products: {
    isVisible: {
      list: false,
      filter: false,
      show: true,
      edit: false,
    },
    components: {
      show: AdminBro.bundle(
        '../../view/adminBro/components/show-product.orders.tsx',
      ),
    },
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
