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

export const defaultUser = {
  name: 'USER',
  login: 'user',
  password: 'P@55w0rd',
} as const;

export const defaultColumn = {
  title: 'Column1',
  order: 0,
  boardId: null,
} as const;

export const defaultTask = {
  title: 'New Task',
  order: 1,
  description: 'lol kek cheburek',
  userId: null,
  boardId: null,
  columnId: null,
} as const;
