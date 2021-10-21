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
  ProductWoodTypesResource,
  ProductAttrsResource,
  RoleResource,
  ProductVariationResource,
} from './adminBroResources';

require('dotenv/config');

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
    {
      resource: database.models.ProductAttrs,
      options: ProductAttrsResource.options,
    },
    {
      resource: database.models.ProductWoodTypes,
      options: ProductWoodTypesResource.options,
    },
    {
      resource: database.models.Roles,
      options: RoleResource.options,
    },
    {
      resource: database.models.ProductVariations,
      options: ProductVariationResource.options,
    },
  ],
  dashboard: {
    handler: async () => {},
    component: AdminBro.bundle(
      '../view/adminBro/components/dashboard.tsx',
    ),
  },
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
      messages: adminBroTranslate.messages,
    },
  },
});
const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

const adminBroAuth = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  {
    authenticate: async (email, password) => {
      if (
        email === process.env.ADMIN_BRO_EMAIL &&
        password === process.env.ADMIN_BRO_PASS
      ) {
        return { email: 'lookmoveis@admin.com', name: 'Look Admin' };
      }
      return false;
    },
    cookiePassword: 'secret',
  },
);

module.exports = { adminBroRouter, adminBroAuth };
