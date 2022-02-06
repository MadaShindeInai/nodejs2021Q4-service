import { createWriteStream } from 'fs';
import path from 'path';
import { DataType } from 'sequelize-typescript';

//
export const simpleColumnDesc = {
  type: DataType.STRING,
  allowNull: false,
};

export const wrireStream = createWriteStream(
  path.join(__dirname, '../logs/logs.log'),
  {
    flags: 'a',
  }
);
