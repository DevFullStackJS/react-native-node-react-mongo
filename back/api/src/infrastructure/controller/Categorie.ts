import { GenericController } from '../../common/infrastructure/generic.controller';
import { CategorieDO } from '../../data/do/Categorie';
// @ts-ignore
import { CategorieRequestDTO } from '../../data/dto/Categorie/request';
// @ts-ignore
import { CategorieResponseDTO } from '../../data/dto/Categorie/response';
import { categorieSA, CategorieSA } from '../../service/applicatif/Categorie';

class CategorieController extends GenericController<
  CategorieDO,
  CategorieRequestDTO,
  CategorieResponseDTO,
  CategorieSA
> {}

export const categorieController = new CategorieController(categorieSA);

