import { EntityRepository, MongoRepository } from 'typeorm';

import { SizeDO } from '../data/do/Size';

@EntityRepository(SizeDO)
export class SizeRepository extends MongoRepository<SizeDO> {}

