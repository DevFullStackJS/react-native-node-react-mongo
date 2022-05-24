import { GenericController } from '../../common/infrastructure/generic.controller';
import { ColorDO } from '../../data/do/Color';
// @ts-ignore
import { ColorRequestDTO } from '../../data/dto/Color/request';
// @ts-ignore
import { ColorResponseDTO } from '../../data/dto/Color/response';
import { colorSA, ColorSA } from '../../service/applicatif/Color';

class ColorController extends GenericController<
  ColorDO,
  ColorRequestDTO,
  ColorResponseDTO,
  ColorSA
> {}

export const colorController = new ColorController(colorSA);

