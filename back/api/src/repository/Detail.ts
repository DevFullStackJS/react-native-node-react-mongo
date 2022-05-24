import { EntityRepository, MongoRepository } from 'typeorm';

import { DetailDO } from '../data/do/Detail';

@EntityRepository(DetailDO)
export class DetailRepository extends MongoRepository<DetailDO> {}

