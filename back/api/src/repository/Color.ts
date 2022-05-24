import { EntityRepository, MongoRepository } from 'typeorm';

import { ColorDO } from '../data/do/Color';

@EntityRepository(ColorDO)
export class ColorRepository extends MongoRepository<ColorDO> {}

