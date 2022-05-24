import { EntityRepository, MongoRepository } from 'typeorm';

import { CollectionDO } from '../data/do/Collection';

@EntityRepository(CollectionDO)
export class CollectionRepository extends MongoRepository<CollectionDO> {}

