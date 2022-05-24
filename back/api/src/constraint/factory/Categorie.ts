import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { CategorieDO } from '../../data/do/Categorie';
// @ts-ignore
import { CategorieRequestDTO } from '../../data/dto/Categorie/request';
// @ts-ignore
import { CategorieResponseDTO } from '../../data/dto/Categorie/response';

const commonSchema = {
  ...dataTDO.Categorie.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class CategorieFactory extends GenericFactory<
  CategorieDO,
  CategorieRequestDTO,
  CategorieResponseDTO
> {}

export const categorieFactory = new CategorieFactory(schema, schema, responseSchema);

