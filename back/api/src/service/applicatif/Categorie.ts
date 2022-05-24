import { GenericSA } from '../../common/service/generic.sa';
import {
    categorieFactory,
  CategorieFactory,
} from '../../constraint/factory/Categorie';
import { CategorieDO } from '../../data/do/Categorie';
// @ts-ignore
import { CategorieRequestDTO } from '../../data/dto/Categorie/request';
// @ts-ignore
import { CategorieResponseDTO } from '../../data/dto/Categorie/response';
import { categorieSM, CategorieSM } from '../metier/Categorie';

export class CategorieSA extends GenericSA<
  CategorieDO,
  CategorieRequestDTO,
  CategorieResponseDTO,
  CategorieSM,
  CategorieFactory
> {
}

export const categorieSA = new CategorieSA(categorieSM, categorieFactory, 'Categorie');

