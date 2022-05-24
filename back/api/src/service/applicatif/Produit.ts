import { GenericSA } from '../../common/service/generic.sa';
import {
    produitFactory,
  ProduitFactory,
} from '../../constraint/factory/Produit';
import { ProduitDO } from '../../data/do/Produit';
// @ts-ignore
import { ProduitRequestDTO } from '../../data/dto/Produit/request';
// @ts-ignore
import { ProduitResponseDTO } from '../../data/dto/Produit/response';
import { produitSM, ProduitSM } from '../metier/Produit';

export class ProduitSA extends GenericSA<
  ProduitDO,
  ProduitRequestDTO,
  ProduitResponseDTO,
  ProduitSM,
  ProduitFactory
> {
}

export const produitSA = new ProduitSA(produitSM, produitFactory, 'Produit');

