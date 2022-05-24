import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ProduitDO } from '../../data/do/Produit';
// @ts-ignore
import { ProduitRequestDTO } from '../../data/dto/Produit/request';
// @ts-ignore
import { ProduitResponseDTO } from '../../data/dto/Produit/response';

const commonSchema = {
  ...dataTDO.Produit.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class ProduitFactory extends GenericFactory<
  ProduitDO,
  ProduitRequestDTO,
  ProduitResponseDTO
> {}

export const produitFactory = new ProduitFactory(schema, schema, responseSchema);

