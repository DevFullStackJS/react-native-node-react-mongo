import { GenericSA } from '../../common/service/generic.sa';
import {
    collectionFactory,
  CollectionFactory,
} from '../../constraint/factory/Collection';
import { CollectionDO } from '../../data/do/Collection';
// @ts-ignore
import { CollectionRequestDTO } from '../../data/dto/Collection/request';
// @ts-ignore
import { CollectionResponseDTO } from '../../data/dto/Collection/response';
import { collectionSM, CollectionSM } from '../metier/Collection';

export class CollectionSA extends GenericSA<
  CollectionDO,
  CollectionRequestDTO,
  CollectionResponseDTO,
  CollectionSM,
  CollectionFactory
> {
}

export const collectionSA = new CollectionSA(collectionSM, collectionFactory, 'Collection');

