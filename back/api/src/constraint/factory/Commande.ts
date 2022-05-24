import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { CommandeDO } from '../../data/do/Commande';
// @ts-ignore
import { CommandeRequestDTO } from '../../data/dto/Commande/request';
// @ts-ignore
import { CommandeResponseDTO } from '../../data/dto/Commande/response';

const commonSchema = {
  ...dataTDO.Commande.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class CommandeFactory extends GenericFactory<
  CommandeDO,
  CommandeRequestDTO,
  CommandeResponseDTO
> {}

export const commandeFactory = new CommandeFactory(schema, schema, responseSchema);

