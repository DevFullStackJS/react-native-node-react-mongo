import { EntityRepository, MongoRepository } from 'typeorm';

import { GuideDO } from '../data/do/Guide';

@EntityRepository(GuideDO)
export class GuideRepository extends MongoRepository<GuideDO> {}

