import { EntityRepository, MongoRepository } from 'typeorm';

import { CategorieDO } from '../data/do/Categorie';

@EntityRepository(CategorieDO)
export class CategorieRepository extends MongoRepository<CategorieDO> {}

