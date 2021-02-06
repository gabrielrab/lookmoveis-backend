import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import AdminBroSequelize from '@admin-bro/sequelize';
import adminBroConfigs from '../config/adminBro';
import database from '../database';
import { adminBroTranslate } from '../translate';
import * as adminBroParentGroup from './adminBroResources/parentGroup/index';

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  database: [database],
  rootPath: adminBroConfigs.url,
  resources: [
    {
      // title: 'Testeee',
      resource: database.models.Addresses,
      options: {
        // title: 'Endereço',
        parent: adminBroParentGroup.customerGroup,
      },
    },
    {
      resource: database.models.Clients,
      options: {
        parent: adminBroParentGroup.customerGroup,
      },
    },
    { resource: database.models.User },
    { resource: database.models.WoodTypes },
    { resource: database.models.Categories },
    { resource: database.models.Products },
    { resource: database.models.Orders },
  ],
  branding: {
    companyName: adminBroConfigs.companyName,
    softwareBrothers: false,
    logo: null,
  },
  locale: {
    language: 'pl',
    translations: {
      actions: adminBroTranslate.actions,
      buttons: adminBroTranslate.buttons,
      properties: adminBroTranslate.properties,
      labels: adminBroTranslate.labels,
      messages: {},
    },
  },
});
const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

export default adminBroRouter;
