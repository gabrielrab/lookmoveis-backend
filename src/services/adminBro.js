import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import AdminBroSequelize from '@admin-bro/sequelize';
import adminBroConfigs from '../config/adminBro';
import database from '../database';

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  database: [database],
  rootPath: adminBroConfigs.url,
  resources: [
    { resource: database.models.Addresses },
    { resource: database.models.Clients },
    { resource: database.models.User },
    { resource: database.models.WoodTypes },
    { resource: database.models.ProductWoodTypes },
    { resource: database.models.Categories },
    { resource: database.models.Products },
    { resource: database.models.Orders },
  ],
  branding: {
    companyName: adminBroConfigs.companyName,
    softwareBrothers: false,
    logo: null,
  },
});
const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

export default adminBroRouter;
