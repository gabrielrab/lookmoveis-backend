module.exports = async (data) => {
  const replacedData = await Buffer.from(
    data.split(',')[1],
    'base64',
  );
  return replacedData;
};
