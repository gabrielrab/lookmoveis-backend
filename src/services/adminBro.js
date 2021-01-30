import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';

const adminBro = new AdminBro({
  database: [],
  rootPath: '/admin',
});
const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

export default adminBroRouter;
