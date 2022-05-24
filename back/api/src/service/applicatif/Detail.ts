import { GenericSA } from '../../common/service/generic.sa';
import {
    detailFactory,
  DetailFactory,
} from '../../constraint/factory/Detail';
import { DetailDO } from '../../data/do/Detail';
// @ts-ignore
import { DetailRequestDTO } from '../../data/dto/Detail/request';
// @ts-ignore
import { DetailResponseDTO } from '../../data/dto/Detail/response';
import { detailSM, DetailSM } from '../metier/Detail';

export class DetailSA extends GenericSA<
  DetailDO,
  DetailRequestDTO,
  DetailResponseDTO,
  DetailSM,
  DetailFactory
> {
}

export const detailSA = new DetailSA(detailSM, detailFactory, 'Detail');

