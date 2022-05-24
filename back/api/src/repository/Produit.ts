import { EntityRepository, MongoRepository } from 'typeorm';

import { ProduitDO } from '../data/do/Produit';

@EntityRepository(ProduitDO)
export class ProduitRepository extends MongoRepository<ProduitDO> {}

