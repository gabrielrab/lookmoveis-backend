import { NotFoundError, ValidationError } from '../utils/errors';

const Repository = (model, listingQuery) => ({
  async getById(id) {
    const entity = await model.findOne({
      where: {
        id,
      },
      include: (listingQuery && listingQuery.associations) || [],
    });
    if (!entity) {
      throw new NotFoundError();
    }
    return entity;
  },

  async list(args) {
    const entities = await model.findAll({
      where: args || {},
      include: (listingQuery && listingQuery.associations) || [],
    });
    if (!entities) {
      throw new NotFoundError();
    }
    return entities;
  },

  async store(data) {
    try {
      const entity = await model.create(data);
      return entity;
    } catch (error) {
      throw new ValidationError(error);
    }
  },

  async update(id, data) {
    try {
      const entity = await model.findByPk(id);
      if (!entity) {
        throw new NotFoundError();
      }
      const updatedEntity = Object.assign(entity.dataValues, {
        ...data,
      });
      await model.build(updatedEntity).validate();
      await model.update(updatedEntity, { where: { id } });
      return updatedEntity;
    } catch (error) {
      throw new ValidationError(error.errors.map((e) => e.message));
    }
  },

  async destroy(id) {
    const entity = await model.findByPk(id);
    if (!entity) {
      throw new NotFoundError();
    }
    await model.destroy({ where: { id } });
    return true;
  },
});

module.exports = Repository;
