import { GenericController } from '../../common/infrastructure/generic.controller';
import { SizeDO } from '../../data/do/Size';
// @ts-ignore
import { SizeRequestDTO } from '../../data/dto/Size/request';
// @ts-ignore
import { SizeResponseDTO } from '../../data/dto/Size/response';
import { sizeSA, SizeSA } from '../../service/applicatif/Size';

class SizeController extends GenericController<
  SizeDO,
  SizeRequestDTO,
  SizeResponseDTO,
  SizeSA
> {}

export const sizeController = new SizeController(sizeSA);

