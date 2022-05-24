import { GenericSA } from '../../common/service/generic.sa';
import {
    guideFactory,
  GuideFactory,
} from '../../constraint/factory/Guide';
import { GuideDO } from '../../data/do/Guide';
// @ts-ignore
import { GuideRequestDTO } from '../../data/dto/Guide/request';
// @ts-ignore
import { GuideResponseDTO } from '../../data/dto/Guide/response';
import { guideSM, GuideSM } from '../metier/Guide';

export class GuideSA extends GenericSA<
  GuideDO,
  GuideRequestDTO,
  GuideResponseDTO,
  GuideSM,
  GuideFactory
> {
}

export const guideSA = new GuideSA(guideSM, guideFactory, 'Guide');

