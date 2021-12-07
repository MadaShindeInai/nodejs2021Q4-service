const typeString = { type: 'string' };
const typeStringUUID = { type: 'string', format: 'uuid' };
const typeNumber = { type: 'number' };
const typeStringUUIDOrNull = { type: 'string', nullable: true, format: 'uuid' };
const res204 = {
  description: 'Removed',
  type: 'null',
};

module.exports = {
  typeString,
  typeStringUUID,
  typeNumber,
  typeStringUUIDOrNull,
  res204,
};
