import { EntityRepository, MongoRepository } from 'typeorm';

import { FavorisDO } from '../data/do/Favoris';

@EntityRepository(FavorisDO)
export class FavorisRepository extends MongoRepository<FavorisDO> {}

