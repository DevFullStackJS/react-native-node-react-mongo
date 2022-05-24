import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { CollectionDO } from '../../data/do/Collection';
import { CollectionRepository } from '../../repository/Collection';

export class CollectionSM extends GenericSM<CollectionDO, string, CollectionRepository> {
}

export const collectionSM = new CollectionSM(getCustomRepository(CollectionRepository));

