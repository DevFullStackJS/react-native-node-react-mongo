import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { DetailDO } from '../../data/do/Detail';
// @ts-ignore
import { DetailRequestDTO } from '../../data/dto/Detail/request';
// @ts-ignore
import { DetailResponseDTO } from '../../data/dto/Detail/response';

const commonSchema = {
  ...dataTDO.Detail.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class DetailFactory extends GenericFactory<
  DetailDO,
  DetailRequestDTO,
  DetailResponseDTO
> {}

export const detailFactory = new DetailFactory(schema, schema, responseSchema);

