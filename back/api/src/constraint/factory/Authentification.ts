import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { AuthentificationDO } from '../../data/do/Authentification';
// @ts-ignore
import { AuthentificationRequestDTO } from '../../data/dto/Authentification/request';
// @ts-ignore
import { AuthentificationResponseDTO } from '../../data/dto/Authentification/response';

const commonSchema = {
  ...dataTDO.Authentification.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class AuthentificationFactory extends GenericFactory<
  AuthentificationDO,
  AuthentificationRequestDTO,
  AuthentificationResponseDTO
> {}

export const authentificationFactory = new AuthentificationFactory(schema, schema, responseSchema);

