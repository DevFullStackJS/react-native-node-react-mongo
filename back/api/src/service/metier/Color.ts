import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ColorDO } from '../../data/do/Color';
import { ColorRepository } from '../../repository/Color';

export class ColorSM extends GenericSM<ColorDO, string, ColorRepository> {
}

export const colorSM = new ColorSM(getCustomRepository(ColorRepository));

