export const typeString = { type: 'string' };
export const typeStringUUID = { type: 'string', format: 'uuid' };
export const typeNumber = { type: 'number' };
export const typeStringUUIDOrNull = {
  type: 'string',
  nullable: true,
  format: 'uuid',
};
export const res204 = {
  description: 'Removed',
  type: 'null',
};
