import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ColorDO } from '../../data/do/Color';
// @ts-ignore
import { ColorRequestDTO } from '../../data/dto/Color/request';
// @ts-ignore
import { ColorResponseDTO } from '../../data/dto/Color/response';

const commonSchema = {
  ...dataTDO.Color.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class ColorFactory extends GenericFactory<
  ColorDO,
  ColorRequestDTO,
  ColorResponseDTO
> {}

export const colorFactory = new ColorFactory(schema, schema, responseSchema);

