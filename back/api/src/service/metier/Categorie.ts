import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { CategorieDO } from '../../data/do/Categorie';
import { CategorieRepository } from '../../repository/Categorie';

export class CategorieSM extends GenericSM<CategorieDO, string, CategorieRepository> {
}

export const categorieSM = new CategorieSM(getCustomRepository(CategorieRepository));

