import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SiteDO } from '../../data/do/Site';
// @ts-ignore
import { SiteRequestDTO } from '../../data/dto/Site/request';
// @ts-ignore
import { SiteResponseDTO } from '../../data/dto/Site/response';

const commonSchema = {
  ...dataTDO.Site.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class SiteFactory extends GenericFactory<
  SiteDO,
  SiteRequestDTO,
  SiteResponseDTO
> {}

export const siteFactory = new SiteFactory(schema, schema, responseSchema);

