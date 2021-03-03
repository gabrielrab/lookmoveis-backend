import 'dotenv/config';

export default {
  url: process.env.ADMIN_BRO_URL,
  companyName: process.env.ADMIN_BRO_COMPANY_NAME,
  parentGroups: {
    customerGroup: {
      name: 'Clientes',
      icon: 'User',
    },
    productGroup: {
      name: 'Produtos',
      icon: 'Bag',
    },
    management: {
      name: 'Gerenciamento',
      icon: 'User',
    },
  },
};
