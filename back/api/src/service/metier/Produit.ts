import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ProduitDO } from '../../data/do/Produit';
import { ProduitRepository } from '../../repository/Produit';

export class ProduitSM extends GenericSM<ProduitDO, string, ProduitRepository> {
}

export const produitSM = new ProduitSM(getCustomRepository(ProduitRepository));

