import { EntityRepository, MongoRepository } from 'typeorm';

import { CommandeDO } from '../data/do/Commande';

@EntityRepository(CommandeDO)
export class CommandeRepository extends MongoRepository<CommandeDO> {}

