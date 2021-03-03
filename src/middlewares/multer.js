import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      return cb(null, path.resolve(__dirname, '../uploads'));
    } catch (error) {
      return cb(error);
    }
  },
  filename: (req, file, cb) => {
    file.key = `${Date.now()}.${file.mimetype.split('/')[1]}`;

    cb(null, file.key);
  },
});

const acceptedFiles = (req, file, cb) => {
  const isAccepted = ['image/jpg', 'image/png', 'image/jpeg'].find(
    (formatAccepted) => formatAccepted === file.mimetype,
  );
  if (isAccepted) {
    return cb(null, true);
  }
  return cb(new Error('Formato não suportado'));
};

module.exports = {
  storage,
  acceptedFiles,
};
