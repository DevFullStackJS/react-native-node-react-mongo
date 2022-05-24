import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { FavorisDO } from '../../data/do/Favoris';
// @ts-ignore
import { FavorisRequestDTO } from '../../data/dto/Favoris/request';
// @ts-ignore
import { FavorisResponseDTO } from '../../data/dto/Favoris/response';

const commonSchema = {
  ...dataTDO.Favoris.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class FavorisFactory extends GenericFactory<
  FavorisDO,
  FavorisRequestDTO,
  FavorisResponseDTO
> {}

export const favorisFactory = new FavorisFactory(schema, schema, responseSchema);

