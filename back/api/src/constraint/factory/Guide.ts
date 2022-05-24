import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { GuideDO } from '../../data/do/Guide';
// @ts-ignore
import { GuideRequestDTO } from '../../data/dto/Guide/request';
// @ts-ignore
import { GuideResponseDTO } from '../../data/dto/Guide/response';

const commonSchema = {
  ...dataTDO.Guide.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class GuideFactory extends GenericFactory<
  GuideDO,
  GuideRequestDTO,
  GuideResponseDTO
> {}

export const guideFactory = new GuideFactory(schema, schema, responseSchema);

