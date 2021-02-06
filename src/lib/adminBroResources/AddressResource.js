import { Addresses } from '../../models';

const resourceName = 'Endereços';
const properties = [];
const actions = {
  new: {},
};
const features = [];

module.exports = {
  resource: Addresses,
  options: {
    properties,
    actions,
  },
  features,
};
