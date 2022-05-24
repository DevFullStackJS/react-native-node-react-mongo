import { EntityRepository, MongoRepository } from 'typeorm';

import { AuthentificationDO } from '../data/do/Authentification';

@EntityRepository(AuthentificationDO)
export class AuthentificationRepository extends MongoRepository<AuthentificationDO> {}

