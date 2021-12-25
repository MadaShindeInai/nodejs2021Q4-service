export const typeString = { type: 'string' } as const;
export const typeStringUUID = { type: 'string', format: 'uuid' } as const;
export const typeNumber = { type: 'number' } as const;
export const typeStringUUIDOrNull = {
  type: 'string',
  nullable: true,
  format: 'uuid',
} as const;
export const res204 = {
  description: 'Removed',
  type: 'null',
} as const;
