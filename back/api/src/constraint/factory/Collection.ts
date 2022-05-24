import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { CollectionDO } from '../../data/do/Collection';
// @ts-ignore
import { CollectionRequestDTO } from '../../data/dto/Collection/request';
// @ts-ignore
import { CollectionResponseDTO } from '../../data/dto/Collection/response';

const commonSchema = {
  ...dataTDO.Collection.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class CollectionFactory extends GenericFactory<
  CollectionDO,
  CollectionRequestDTO,
  CollectionResponseDTO
> {}

export const collectionFactory = new CollectionFactory(schema, schema, responseSchema);

