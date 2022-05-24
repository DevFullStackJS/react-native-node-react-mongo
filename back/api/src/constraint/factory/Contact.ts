import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ContactDO } from '../../data/do/Contact';
// @ts-ignore
import { ContactRequestDTO } from '../../data/dto/Contact/request';
// @ts-ignore
import { ContactResponseDTO } from '../../data/dto/Contact/response';

const commonSchema = {
  ...dataTDO.Contact.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class ContactFactory extends GenericFactory<
  ContactDO,
  ContactRequestDTO,
  ContactResponseDTO
> {}

export const contactFactory = new ContactFactory(schema, schema, responseSchema);

