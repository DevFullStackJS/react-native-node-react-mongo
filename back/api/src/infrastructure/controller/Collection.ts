import { GenericController } from '../../common/infrastructure/generic.controller';
import { CollectionDO } from '../../data/do/Collection';
// @ts-ignore
import { CollectionRequestDTO } from '../../data/dto/Collection/request';
// @ts-ignore
import { CollectionResponseDTO } from '../../data/dto/Collection/response';
import { collectionSA, CollectionSA } from '../../service/applicatif/Collection';

class CollectionController extends GenericController<
  CollectionDO,
  CollectionRequestDTO,
  CollectionResponseDTO,
  CollectionSA
> {}

export const collectionController = new CollectionController(collectionSA);

