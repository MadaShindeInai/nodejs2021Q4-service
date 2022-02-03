import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdateColumnDto } from 'src/boards/dto/update-board.dto';
import { ValidationException } from 'src/exceptions/validation.exception';

const findConstraints = (item) => {
  let result = {} as any;
  if (item.constraints) {
    result = item.constraints;
  }
  if (item.children) {
    const test = item.children.map(findConstraints);
    result = Object.assign({}, result, ...test);
  }
  return result;
};

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    // const obj = plainToClass(metadata.metatype, value);
    // Array.isArray(obj?.columns) &&
    //   obj.columns.map((column) =>
    //     validate(plainToClass(UpdateColumnDto, column))
    //   );
    // const errors = await validate(obj, {
    //   whitelist: true,
    //   forbidUnknownValues: true,
    //   forbidNonWhitelisted: true,
    // });

    // if (errors.length) {
    //   const messages = errors.map(
    //     (err) =>
    //       `${err.property} - ${Object.values(findConstraints(err)).join(', ')}`
    //   );
    //   throw new ValidationException(messages);
    // }
    return value;
  }
}
