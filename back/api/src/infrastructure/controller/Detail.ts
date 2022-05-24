import { GenericController } from '../../common/infrastructure/generic.controller';
import { DetailDO } from '../../data/do/Detail';
// @ts-ignore
import { DetailRequestDTO } from '../../data/dto/Detail/request';
// @ts-ignore
import { DetailResponseDTO } from '../../data/dto/Detail/response';
import { detailSA, DetailSA } from '../../service/applicatif/Detail';

class DetailController extends GenericController<
  DetailDO,
  DetailRequestDTO,
  DetailResponseDTO,
  DetailSA
> {}

export const detailController = new DetailController(detailSA);

