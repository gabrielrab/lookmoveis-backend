import Queue from '../lib/Queue';

module.exports = {
  async sendEmail(req, res) {
    await Queue.add('NewEmailFromSiteJob', { ...req.body });
    return res.sendStatus(204);
  },
};
