import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import AdminBroSequelize from '@admin-bro/sequelize';
import adminBroConfigs from '../config/adminBro';
import database from '../database';
import { adminBroTranslate } from '../translate';
import {
  AddressResource,
  ClientResource,
  CategoryResource,
  ProductResource,
  WoodTypeResource,
  UserResource,
  OrderResource,
} from './adminBroResources';

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  database: [database],
  rootPath: adminBroConfigs.url,
  resources: [
    {
      resource: database.models.Addresses,
      options: AddressResource.options,
    },
    {
      resource: database.models.Clients,
      options: ClientResource.options,
    },
    {
      resource: database.models.Products,
      options: ProductResource.options,
    },
    {
      resource: database.models.Categories,
      options: CategoryResource.options,
    },
    {
      resource: database.models.WoodTypes,
      options: WoodTypeResource.options,
    },
    {
      resource: database.models.User,
      options: UserResource.options,
    },
    {
      resource: database.models.Orders,
      options: OrderResource.options,
    },
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
