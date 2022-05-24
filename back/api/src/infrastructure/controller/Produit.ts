import { GenericController } from '../../common/infrastructure/generic.controller';
import { ProduitDO } from '../../data/do/Produit';
// @ts-ignore
import { ProduitRequestDTO } from '../../data/dto/Produit/request';
// @ts-ignore
import { ProduitResponseDTO } from '../../data/dto/Produit/response';
import { produitSA, ProduitSA } from '../../service/applicatif/Produit';

class ProduitController extends GenericController<
  ProduitDO,
  ProduitRequestDTO,
  ProduitResponseDTO,
  ProduitSA
> {}

export const produitController = new ProduitController(produitSA);

