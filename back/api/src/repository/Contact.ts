import { EntityRepository, MongoRepository } from 'typeorm';

import { ContactDO } from '../data/do/Contact';

@EntityRepository(ContactDO)
export class ContactRepository extends MongoRepository<ContactDO> {}

