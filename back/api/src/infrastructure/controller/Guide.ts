import { GenericController } from '../../common/infrastructure/generic.controller';
import { GuideDO } from '../../data/do/Guide';
// @ts-ignore
import { GuideRequestDTO } from '../../data/dto/Guide/request';
// @ts-ignore
import { GuideResponseDTO } from '../../data/dto/Guide/response';
import { guideSA, GuideSA } from '../../service/applicatif/Guide';

class GuideController extends GenericController<
  GuideDO,
  GuideRequestDTO,
  GuideResponseDTO,
  GuideSA
> {}

export const guideController = new GuideController(guideSA);

