import { GenericSA } from '../../common/service/generic.sa';
import {
    colorFactory,
  ColorFactory,
} from '../../constraint/factory/Color';
import { ColorDO } from '../../data/do/Color';
// @ts-ignore
import { ColorRequestDTO } from '../../data/dto/Color/request';
// @ts-ignore
import { ColorResponseDTO } from '../../data/dto/Color/response';
import { colorSM, ColorSM } from '../metier/Color';

export class ColorSA extends GenericSA<
  ColorDO,
  ColorRequestDTO,
  ColorResponseDTO,
  ColorSM,
  ColorFactory
> {
}

export const colorSA = new ColorSA(colorSM, colorFactory, 'Color');

