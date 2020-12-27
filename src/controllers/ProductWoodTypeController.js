import repository from '../factories/Repository';
import { ProductWoodTypes as ProductWoodType } from '../models';

module.exports = {
  async list(req, res) {
    const data = await repository(ProductWoodType).list(req.query);
    return res.send(data);
  },

  async store(req, res) {
    const data = await repository(ProductWoodType).store({
      productId: req.params.id,
      woodTypeId: req.params.woodTypeId,
    });
    return res.send(data);
  },

  async destroy(req, res) {
    const data = await repository(ProductWoodType).list({
      productId: req.params.id,
      woodTypeId: req.params.woodTypeId,
    });
    console.log('[data]', data);
    await repository(ProductWoodType).destroy(data[0].id);
    return res.sendStatus(204);
  },
};
