import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SizeDO } from '../../data/do/Size';
// @ts-ignore
import { SizeRequestDTO } from '../../data/dto/Size/request';
// @ts-ignore
import { SizeResponseDTO } from '../../data/dto/Size/response';

const commonSchema = {
  ...dataTDO.Size.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class SizeFactory extends GenericFactory<
  SizeDO,
  SizeRequestDTO,
  SizeResponseDTO
> {}

export const sizeFactory = new SizeFactory(schema, schema, responseSchema);

